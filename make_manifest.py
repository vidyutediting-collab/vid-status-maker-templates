#!/usr/bin/env python3
"""templates-server ka manifest.json banata hai.

Chalane ka tarika:  python3 make_manifest.py
Ye script apne folder ko padhti hai, har template ko check karti hai aur
manifest.json likh deti hai. Dobara chalane se same result milta hai.
"""
import hashlib
import json
import re
import sys
from pathlib import Path

DEFAULT_EMOJI = "✨"
ID_RE = re.compile(r"^[a-z0-9][a-z0-9_-]*$")
FIELD_TYPES = ("text", "area")


def read_json(path):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, ValueError) as err:
        raise SystemExit(f"GALTI: {path} padh nahi paya ({err})")


def check_template(meta, code, where):
    problems = []
    if not isinstance(meta.get("id"), str) or not ID_RE.match(meta["id"]):
        problems.append("id sirf chhote letters, numbers, - aur _ ka hona chahiye")
    if not isinstance(meta.get("name"), str) or not meta["name"].strip():
        problems.append("name nahi hai")
    slots = meta.get("slots")
    if not isinstance(slots, int) or isinstance(slots, bool) or slots < 1:
        problems.append("slots 1 ya usse zyada number hona chahiye")
    fields = meta.get("fields", [])
    if not isinstance(fields, list):
        problems.append("fields list honi chahiye")
    else:
        for f in fields:
            if not isinstance(f, dict) or not all(isinstance(f.get(k), str) for k in ("k", "label", "def")):
                problems.append("har field me k, label aur def text hone chahiye")
                break
            if f.get("type", "text") not in FIELD_TYPES:
                problems.append("field type 'text' ya 'area' hona chahiye")
                break
    if "return function" not in code:
        problems.append("template.js me 'return function(ctx,t,S){...}' nahi mila")
    if problems:
        raise SystemExit(f"GALTI: {where}: " + "; ".join(problems))


def main():
    root = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path(__file__).resolve().parent
    if not root.is_dir():
        raise SystemExit(f"GALTI: folder nahi mila: {root}")

    categories = {}
    templates = []
    seen_ids = {}

    for folder in sorted(p for p in root.iterdir() if p.is_dir() and not p.name.startswith(".")):
        info_path = folder / "category.json"
        info = read_json(info_path) if info_path.exists() else {}
        categories[folder.name] = {
            "emoji": info.get("emoji", DEFAULT_EMOJI),
            "order": info.get("order", 1000),
        }
        for tdir in sorted(p for p in folder.iterdir() if p.is_dir()):
            meta_path = tdir / "template.json"
            code_path = tdir / "template.js"
            if not meta_path.exists() and not code_path.exists():
                continue
            where = f"{folder.name}/{tdir.name}"
            if not meta_path.exists() or not code_path.exists():
                raise SystemExit(f"GALTI: {where} me template.json aur template.js dono chahiye")
            meta = read_json(meta_path)
            code_bytes = code_path.read_bytes()
            check_template(meta, code_bytes.decode("utf-8"), where)
            if meta["id"] in seen_ids:
                raise SystemExit(f"GALTI: id '{meta['id']}' do jagah hai: {seen_ids[meta['id']]} aur {where}")
            seen_ids[meta["id"]] = where
            cats = meta.get("cat") or [folder.name]
            templates.append({
                "id": meta["id"],
                "name": meta["name"],
                "cat": cats,
                "slots": meta["slots"],
                "fields": meta.get("fields", []),
                "file": f"{folder.name}/{tdir.name}/template.js",
                "hash": hashlib.sha256(code_bytes).hexdigest(),
                "size": len(code_bytes),
                "_order": meta.get("order", 100000),
            })

    for t in templates:
        for c in t["cat"]:
            if c not in categories:
                print(f"DHYAN: '{c}' naam ka folder nahi hai, isliye {t['id']} ke liye naya category bana diya")
                categories[c] = {"emoji": DEFAULT_EMOJI, "order": 1000}

    templates.sort(key=lambda t: (t["_order"], t["name"].lower(), t["id"]))
    for t in templates:
        del t["_order"]
    cat_list = [
        {"name": n, "emoji": c["emoji"]}
        for n, c in sorted(categories.items(), key=lambda kv: (kv[1]["order"], kv[0].lower()))
    ]

    body = {"version": 1, "categories": cat_list, "templates": templates}
    digest = hashlib.sha256(json.dumps(body, sort_keys=True, ensure_ascii=False).encode("utf-8")).hexdigest()
    manifest = {"version": 1, "rev": digest[:12], "categories": cat_list, "templates": templates}

    out = root / "manifest.json"
    text = json.dumps(manifest, indent=2, ensure_ascii=False) + "\n"
    if not out.exists() or out.read_text(encoding="utf-8") != text:
        out.write_text(text, encoding="utf-8")
    print(f"Ho gaya: {len(templates)} template, {len(cat_list)} folder -> {out.name}")


main()
