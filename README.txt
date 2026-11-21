VID STATUS MAKER - TEMPLATES SERVER
====================================
Is folder me app ki saari templates aur folders (categories) hain.
Yahan naya template daalo, upload karo, aur app me apne aap aa jayega.
App update / Play Store update ki zaroorat NAHI.


NAYA TEMPLATE JODNE KE 3 STEP
-----------------------------
1) Folder me files daalo
   - Jis category me template dikhana hai, uska folder kholo (jaise "Love").
   - Uske andar naya folder banao, jaise  Love/mera-template
   - Us folder me 2 file rakho:
        template.json   (naam, kitni photo, caption ke boxes)
        template.js     (template ka design code)
   Sabse aasan tarika: kisi purane template ka folder copy karo, naam badlo,
   aur andar ki 2 files apni banao. Misaal ke liye  Love/heart-rain  dekho.

2) Ek command chalao  (is folder me)
        python3 make_manifest.py
   Ye saari files check karta hai aur manifest.json bana deta hai.
   Koi galti hogi to saaf Hinglish me bata deta hai.

3) Upload karo
   Poora folder (manifest.json aur settings.json ke saath) apne static host par upload karo
   (GitHub Pages free hai - neeche likha hai). Bas. App agli baar khulne par
   (ya Templates screen par "Dobara try karo" dabane par) naya template le lega.


NAYA FOLDER (CATEGORY) BANANA
-----------------------------
   - Naya folder banao, jaise  Status
   - Uske andar category.json banao:
         { "emoji": "🔥", "order": 8 }
     (emoji = folder ka nishan, order = list me kaunsa number)
   - Phir us folder ke andar templates rakho (step 1 jaise), aur step 2, 3 karo.
   Folder hatana ho to folder delete karo, step 2 aur 3 dobara karo.
   Ek template ko 2 folders me dikhana ho to template.json ki "cat" me dono naam likho.


template.json KAISA HOTA HAI
----------------------------
   {
     "id": "mera-template",          chhote letters, number, - ya _  (har template ka alag)
     "name": "Mera Template",        app me ye naam dikhega
     "cat": ["Love"],                kis folder(on) me dikhana hai
     "slots": 2,                     kitni photos lagti hain (1 ya zyada)
     "order": 20,                    list me number (chhota number pehle)
     "fields": [                     caption boxes (khali [] bhi chalega)
       { "k": "caption", "label": "Caption", "def": "Tum ho to sab hai", "type": "text" }
     ]
   }
   type "text" = ek line, "area" = kai lines.


template.js KAISA HOTA HAI
--------------------------
   Ye ek canvas drawing function hai. Pehle  heart-rain/template.js  ya
   neon-heart/template.js kholke dekho - waise hi likho:
        return function(ctx, t, S){ ... }
   ctx = canvas, t = second, S = photos aur caption. W aur H = 540 x 960.


ADS AUR LOGO ONLINE KAISE BADLEIN  (settings.json)
--------------------------------------------------
App har baar khulte hi is folder ki  settings.json  padhta hai (templates ke saath, usi address se).
Isse app update ke bina ads on/off, naye ad unit ID aur logo badal sakte ho.
settings.json me kuch galat ho (ya net na ho) to app apni pichhli achhi settings ya default use karta hai -
app kabhi atakta nahi, export kabhi nahi rukta.

Poora sample (is file ko GitHub par edit karo, "Commit changes" dabao):

   {
     "ads": {
       "enabled": true,
       "banner_enabled": true,
       "interstitial_enabled": true,
       "banner_unit_id": "ca-app-pub-1234567890123456/1234567890",
       "interstitial_unit_id": "ca-app-pub-1234567890123456/0987654321",
       "interstitial_min_gap_seconds": 30
     },
     "logo": {
       "logo_url": "https://example.com/mera-logo.png",
       "app_name_in_header": "MERA APP"
     }
   }

ADS ke fields ("ads" ke andar)
   enabled                       true = ads chalein, false = koi ad nahi (default false).
   banner_enabled                true/false - neeche wala banner ad.
   interstitial_enabled          true/false - export se pehle wala full-screen ad.
   banner_unit_id                banner ki AdMob unit ID. Format: ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX
   interstitial_unit_id          interstitial ki unit ID, wahi format.
   interstitial_min_gap_seconds  do full-screen ad ke beech kam se kam itne second (0 se 86400).
   Dhyan:
   - enabled false ho ya unit ID sahi format me na ho to us ad ki jagah KUCH nahi dikhta aur
     export turant shuru hota hai.
   - Koi field galat likhi ho to sirf wahi field ignore hoti hai (app ke andar ka default lagta hai).
   - Abhi default me ads BAND hain (enabled false), kyunki purana AdMob account band hai aur
     app me bani hui purani IDs kaam nahi karti.
   - Ads ka asar app dobara khulne par dikhta hai (settings app khulte hi aati hai).

Kya online badal sakta hai, kya nahi:
   - Usi AdMob app ki NAYI banner / interstitial unit ID: online badal sakti hai (banner_unit_id, interstitial_unit_id).
   - NAYA AdMob APP ID (ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX): online nahi badalta. config.properties me
     ADMOB_APP_ID badlo aur app EK baar dobara build karke naya APK do.
   - Koi aur ad network (Meta, Unity, AppLovin...): iske liye code badalna padega, online nahi hota.
   - Launcher icon aur phone me dikhne wala app ka naam: online nahi badalte (Android ke hisaab se APK me bante hain).

LOGO ke fields ("logo" ke andar)
   logo_url             app ke andar header aur menu me dikhne wala logo. Do tarike:
                          1) pura https address, jaise "https://example.com/mera-logo.png"
                          2) is repository ke andar ka path, jaise "mera-logo.png" (file settings.json ke saath daalo)
                        Khali ("") = app ka apna logo. http:// (bina s) ya galat address ignore hota hai.
                        Image: png / jpg / webp / svg, 512 KB se chhoti, square achha dikhta hai.
   logo_version         (optional) logo ki file wahi naam se badli ho to yahan "2", "3" likho,
                        tab phone naya logo le lega. Naam badal do to bhi chalega.
   app_name_in_header   (optional) header aur menu me dikhne wala naam, 24 letters tak. Khali = "Vid Status MAKER".
   Logo phone me save (cache) ho jata hai; net na ho ya download fail ho to purana ya app ka apna logo dikhta hai.


HOSTING (GITHUB PAGES - FREE)
-----------------------------
   1. github.com par free account banao (agar nahi hai).
   2. New repository banao, naam: vid-status-maker-templates, "Public" chuno.
   3. "uploading an existing file" dabao aur is folder ke andar ka SAB kuch
      (manifest.json, saare category folders, privacy-policy.html, terms.html)
      drag karke daal do. "Commit changes" dabao.
   4. Repository ki Settings > Pages kholo. Source me "Deploy from a branch",
      branch "main", folder "/ (root)" chuno, Save dabao.
   5. 1-2 minute baad address milega, jaise:
          https://TUMHARA-NAAM.github.io/vid-status-maker-templates/
      Browser me  <address>manifest.json  kholke dekho - text dikhna chahiye.
   6. App ki  config.properties  me TEMPLATES_BASE_URL me wahi address daalo
      (aakhir me / ke saath) aur app dobara build karo - sirf EK baar.
   Uske baad naya template jodne ke liye bas upar ke 3 step. App dobara build nahi karna.

   Privacy Policy ka web link (Play Store ke liye):
          https://TUMHARA-NAAM.github.io/vid-status-maker-templates/privacy-policy.html
   Terms:  https://TUMHARA-NAAM.github.io/vid-status-maker-templates/terms.html


DHYAN
-----
   - manifest.json haath se mat badlo; hamesha make_manifest.py se banao.
   - Template ka  id  baad me mat badlo (phone me save hua cache usi se jud'ta hai).
   - Template ka code badla to bhi make_manifest.py dobara chalao, tabhi phone naya code lega.
   - App ke andar 10 templates pehle se bundled hain, isliye pehli baar internet na ho to bhi dikhte hain.
