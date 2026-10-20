# Vizsgaremek – Tartalomgyártói projekt- és hirdetéskezelő rendszer

## 1. A projekt célja

A projekt célja egy olyan webes alkalmazás létrehozása, amely kapcsolatot teremt tartalomgyártók és hirdetők között.

A rendszer lehetőséget biztosít arra, hogy a hirdetők tartalomgyártókat keressenek különböző munkákhoz és projektekhez, a tartalomgyártók pedig böngészhessék a számukra elérhető hirdetéseket és jelentkezhessenek azokra.

A felhasználók a rendszeren belül saját profilt kezelhetnek, egymással kommunikálhatnak, projektekben vehetnek részt, valamint nyomon követhetik a folyamatban lévő és lezárt munkáikat.

A rendszer része egy nyilvánosan elérhető bemutatkozó weboldal is, ahol a látogatók megismerhetik a szolgáltatásokat, megtekinthetik a bemutatkozó médiaanyagokat, kapcsolatba léphetnek az oldal üzemeltetőjével, illetve regisztrálhatnak.

A projekt frontendje Angular, backendje Laravel technológiával készül. Az adatok tárolása relációs adatbázisban történik.

---

# 2. Felhasználói szerepkörök

A rendszer különböző jogosultságokkal rendelkező felhasználókat kezel.

## 2.1. Látogató

A látogató regisztráció nélkül fér hozzá a weboldal nyilvános részeihez.

Elérhető funkciói:

- kezdőoldal megtekintése;
- szolgáltatások megtekintése;
- bemutatkozó videók megtekintése;
- kapcsolatfelvétel;
- hírlevélre történő feliratkozás;
- regisztráció;
- bejelentkezés.

## 2.2. Tartalomgyártó

A tartalomgyártó olyan regisztrált felhasználó, aki hirdetésekre jelentkezhet és projektekben vehet részt.

Elérhető funkciói:

- saját profil kezelése;
- profilkép feltöltése;
- bemutatkozás megadása;
- referenciaanyagok kezelése;
- hirdetések böngészése;
- hirdetésekre történő jelentkezés;
- projektmeghívások kezelése;
- projektek megtekintése;
- üzenetek küldése és fogadása.

## 2.3. Hirdető

A hirdető tartalomgyártókat kereshet munkákhoz és projektekhez.

Elérhető funkciói:

- saját profil kezelése;
- hirdetések létrehozása;
- saját hirdetések kezelése;
- jelentkezők megtekintése;
- projektek létrehozása;
- tartalomgyártók projekthez rendelése;
- projekttagok kezelése;
- üzenetek küldése és fogadása.

## 2.4. Moderátor

A moderátor feladata a rendszerbe beküldött hirdetések ellenőrzése.

Jogosultságai:

- moderációra váró hirdetések megtekintése;
- hirdetések elfogadása;
- hirdetések elutasítása;
- elutasítás indoklása;
- korábbi moderációk megtekintése.

## 2.5. Adminisztrátor

Az adminisztrátor a rendszer teljes körű kezelésére jogosult.

Feladatai:

- felhasználók kezelése;
- jogosultságok kezelése;
- hirdetések kezelése;
- moderáció kezelése;
- nyilvános tartalmak kezelése;
- szolgáltatások kezelése.

---

# 3. Funkcionális követelmények

## 3.1. Nyilvános kezdőoldal

A weboldal rendelkezik egy nyilvánosan elérhető kezdőoldallal.

A kezdőoldal tartalma:

- rövid bemutatkozás;
- szolgáltatások ismertetése;
- minta videók;
- elkészült munkák bemutatása;
- kapcsolatfelvételi lehetőség;
- regisztráció;
- bejelentkezés.

A weboldal lábléce tartalmazza:

- elérhetőségeket;
- hírlevél-feliratkozást;
- adatkezelési tájékoztatót;
- általános szerződési feltételeket;
- nyelvválasztási lehetőséget;
- szerzői jogi információkat.

---

## 3.2. Regisztráció

A rendszer lehetőséget biztosít hagyományos és Google-fiókkal történő regisztrációra.

A hagyományos regisztráció során szükséges adatok:

- email cím;
- felhasználónév;
- jelszó;
- jelszó megerősítése;
- felhasználói szerepkör.

A választható alap szerepkörök:

- tartalomgyártó;
- hirdető.

A felhasználónak el kell fogadnia:

- az általános szerződési feltételeket;
- az adatkezelési tájékoztatót.

A regisztráció során külön lehetőség biztosított a hírlevélre történő feliratkozásra.

Az email címnek és a felhasználónévnek egyedinek kell lennie.

---

## 3.3. Email-megerősítés

A regisztráció után a rendszer megerősítő emailt küld.

A felhasználói fiók csak sikeres email-megerősítés után használható teljes körűen.

A megerősítő hivatkozás:

- egyszer használható;
- lejárati idővel rendelkezik;
- sikeres felhasználás után érvényét veszti.

A rendszernek képesnek kell lennie az ismert ideiglenes email-szolgáltatások használatának korlátozására.

---

## 3.4. Bejelentkezés

A felhasználó bejelentkezhet:

- email címmel és jelszóval;
- felhasználónévvel és jelszóval;
- Google-fiókkal.

A bejelentkezési felületről elérhető:

- regisztráció;
- jelszó-visszaállítás.

---

## 3.5. Jelszó-visszaállítás

A felhasználó az email címe megadásával jelszó-visszaállítást kezdeményezhet.

A rendszer emailben egyszer használható és időkorlátos hivatkozást küld.

A hivatkozás használatával új jelszó állítható be.

---

## 3.6. Főoldal bejelentkezett felhasználóknak

Bejelentkezés után a felhasználó egy összefoglaló főoldalra kerül.

A főoldalon widgetek formájában megjelennek:

- aktív projektek;
- projektmeghívások;
- olvasatlan üzenetek;
- legutóbbi beszélgetések;
- új hirdetések;
- saját hirdetések állapota.

Az olvasatlan üzenetek kiemelten jelennek meg.

---

## 3.7. Navigáció

A bejelentkezett felhasználók számára elérhető fő menüpontok:

- Főoldal;
- Projektek;
- Hirdetések;
- Üzenetek;
- Adatlap;
- Kijelentkezés.

Moderátor és adminisztrátor esetén további kezelőfelületek érhetők el.

---

## 3.8. Felhasználói profil

Minden regisztrált felhasználó rendelkezik saját adatlappal.

Tárolt profiladatok:

- profilkép;
- név;
- felhasználónév;
- bemutatkozás;
- lakhely vagy működési terület;
- telefonszám;
- weboldal;
- közösségi média elérhetőségek.

A tartalomgyártók további referenciaanyagokat és médiafájlokat rendelhetnek a profiljukhoz.

---

## 3.9. Tartalomgyártói kategóriák

A tartalomgyártók egy vagy több szakmai kategóriába sorolhatók.

A kategóriák segítségével a hirdetők könnyebben megtalálhatják a megfelelő tartalomgyártókat, illetve a hirdetések is kategorizálhatók.

Egy tartalomgyártóhoz több kategória is rendelhető.

---

## 3.10. Projektek kezelése

A rendszer lehetőséget biztosít projektek létrehozására és kezelésére.

Egy projekt tartalmazza:

- projekt nevét;
- leírását;
- létrehozó hirdetőt;
- kezdési dátumot;
- befejezési dátumot;
- állapotot;
- résztvevőket.

A projekt lehetséges állapotai:

- tervezett;
- folyamatban;
- befejezett;
- megszakított.

A hirdető tartalomgyártókat hívhat meg egy projekthez.

A meghívott tartalomgyártó:

- elfogadhatja a meghívást;
- elutasíthatja a meghívást.

Egy projekthez több tartalomgyártó is tartozhat.

A projektből kilépő vagy eltávolított résztvevő helyére új tartalomgyártó kereshető.

---

## 3.11. Hirdetések létrehozása

A hirdetők új hirdetéseket hozhatnak létre.

A hirdetés adatai:

- cím;
- leírás;
- keresett tartalomgyártói kategória;
- helyszín;
- kezdési időpont;
- befejezési időpont;
- jelentkezési határidő;
- díjazás vagy költségkeret.

A hirdetések lehetséges állapotai:

- piszkozat;
- moderációra vár;
- elfogadott;
- elutasított;
- lezárt.

Az új hirdetések csak sikeres moderáció után válnak elérhetővé a tartalomgyártók számára.

---

## 3.12. Hirdetések böngészése

A tartalomgyártók megtekinthetik az elfogadott hirdetéseket.

A hirdetések között keresési és szűrési lehetőség áll rendelkezésre.

Szűrési feltételek:

- kulcsszó;
- kategória;
- helyszín;
- dátum.

A tartalomgyártó jelentkezhet egy hirdetésre.

Egy felhasználó ugyanarra a hirdetésre csak egyszer jelentkezhet.

---

## 3.13. Jelentkezések kezelése

A hirdető megtekintheti az adott hirdetéshez tartozó jelentkezőket.

A jelentkezések állapotai:

- függőben;
- elfogadott;
- elutasított;
- visszavont.

A hirdető kapcsolatba léphet a jelentkezővel, majd a kiválasztott tartalomgyártót projekthez rendelheti.

---

## 3.14. Üzenetküldés

A rendszer lehetőséget biztosít a felhasználók közötti üzenetküldésre.

Funkciók:

- felhasználó keresése;
- beszélgetés indítása;
- üzenet küldése;
- beszélgetések listázása;
- olvasatlan üzenetek jelölése;
- üzenetek időpontjának megjelenítése.

A beszélgetések projekthez is kapcsolhatók.

---

## 3.15. Moderáció

A moderációs felület csak megfelelő jogosultsággal használható.

A moderátor:

- megtekintheti a moderációra váró hirdetéseket;
- elfogadhatja azokat;
- elutasíthatja azokat;
- elutasítási indokot adhat meg.

A moderációs műveleteket a rendszer eltárolja.

---

## 3.16. Hírlevél

A rendszer támogatja a hírlevélre történő feliratkozást.

Hírlevélre regisztrált és nem regisztrált felhasználó is feliratkozhat.

A rendszer kezeli:

- feliratkozást;
- feliratkozás megerősítését;
- leiratkozást.

---

## 3.17. Kapcsolatfelvétel

A nyilvános weboldalon kapcsolatfelvételi űrlap található.

Megadható adatok:

- név;
- email cím;
- telefonszám;
- üzenet.

A beküldött üzenetek a rendszerben tárolásra kerülnek.

---

# 4. Nem funkcionális követelmények

## 4.1. Reszponzív megjelenítés

A weboldalnak és az alkalmazásnak megfelelően kell megjelennie:

- asztali számítógépen;
- laptopon;
- tableten;
- mobiltelefonon.

---

## 4.2. Biztonság

A felhasználók jelszavait nem szabad olvasható formában tárolni.

A rendszernek biztosítania kell:

- jelszavak biztonságos tárolását;
- jogosultságok ellenőrzését;
- email-megerősítést;
- lejáró és egyszer használható tokeneket;
- bevitt adatok ellenőrzését;
- jogosulatlan hozzáférés megakadályozását;
- felhasználói munkamenetek megfelelő kezelését;
- érzékeny adatok védelmét.

---

## 4.3. Adatvédelem

A felhasználók személyes adatait csak a rendszer működéséhez szükséges mértékben szabad tárolni.

A felhasználónak a regisztráció során el kell fogadnia az adatkezelési tájékoztatót.

A jogi dokumentumok elfogadását és azok verzióját a rendszernek nyilván kell tartania.

---

## 4.4. Megbízhatóság

A rendszernek meg kell akadályoznia az érvénytelen vagy hiányos adatok mentését.

A felhasználó számára egyértelmű visszajelzést kell biztosítani sikeres és sikertelen művelet esetén.

---

# 5. Adatbázisterv

A rendszer relációs adatbázist használ.

Az adatbázis a felhasználókat, profilokat, hirdetéseket, projekteket, jelentkezéseket, üzeneteket és a rendszer működéséhez szükséges további adatokat tárolja.

---

## 5.1. users

A felhasználói fiókok alapadatait tárolja.

| Mező              | Típus                 | Leírás                      |
| ----------------- | --------------------- | --------------------------- |
| id                | BIGINT, PK            | Egyedi azonosító            |
| email             | VARCHAR, UNIQUE       | Email cím                   |
| password          | VARCHAR, NULL         | Titkosított jelszó          |
| google_id         | VARCHAR, NULL, UNIQUE | Google-fiók azonosító       |  ???
| email_verified_at | TIMESTAMP, NULL       | Email-megerősítés időpontja |  -- 1 hét után törli a profil létrehozást, ha nincs megerősítve
| is_active         | BOOLEAN               | Fiók állapota               |  
| created_at        | TIMESTAMP             | Létrehozás időpontja        |
| updated_at        | TIMESTAMP             | Módosítás időpontja         |

---

## 5.2. roles

A rendszerben elérhető szerepköröket tárolja.

| Mező            | Típus           |
| ----------------| --------------- |
| id              | BIGINT, PK      |  
| name            | VARCHAR, UNIQUE |
| Avalability     | boolean         |     -- 2 elérhető regisztrálásnál: advertiser vagy creator

Tárolt szerepkörök:

- CONTENT_CREATOR;
- ADVERTISER;
- video_editor
- video_maker
- other
- MODERATOR;
- ADMIN.

---

## 5.3. user_roles

A felhasználók és szerepkörök kapcsolatát tárolja.

| Mező    | Típus         |
| ------- | ------------- |
| user_id | FK → users.id |
| role_id | FK → roles.id |

Kapcsolat:

`users N — M roles`

---

## 5.4. user_profiles

A felhasználók profiladatait tárolja.

| Mező         | Típus             |
| ------------ | ----------------- |
| user_id      | PK, FK → users.id |
| full_name    | VARCHAR           |
| bio          | TEXT              |
| city         | VARCHAR           |
| phone        | VARCHAR, NULL     |
| avatar_url   | VARCHAR, NULL     |
| created_at   | TIMESTAMP         |
| updated_at   | TIMESTAMP         |

Kapcsolat:

`users 1 — 1 user_profiles`

---

## socials

id  
user_id  
platform  
profile_url  


## 5.7. advertisers

A hirdetőkhöz tartozó adatokat tárolja.

| Mező          | Típus         |
| ------------- | ------------- |
| id            | BIGINT, PK    |
| owner_user_id | FK → users.id |
| name          | VARCHAR       |
| description   | TEXT          |
| logo_url      | VARCHAR, NULL |
| email         | VARCHAR       |
| phone         | VARCHAR, NULL |
| website_url   | VARCHAR, NULL |
| created_at    | TIMESTAMP     |
| updated_at    | TIMESTAMP     |

---

## 5.8. projects

A létrehozott projekteket tárolja.

| Mező          | Típus               |
| ------------- | ------------------- |
| id            | BIGINT, PK          |
| advertiser_id | FK → advertisers.id |
| created_by    | FK → users.id       |
| title         | VARCHAR             |
| description   | TEXT                |
| status        | VARCHAR             |
| start_date    | DATE, NULL          |
| end_date      | DATE, NULL          |
| created_at    | TIMESTAMP           |
| updated_at    | TIMESTAMP           |

Kapcsolat:

`advertisers 1 — N projects`

---

## 5.9. project_members

A projektekhez tartozó résztvevőket tárolja.

| Mező         | Típus            |
| ------------ | ---------------- |
| project_id   | FK → projects.id |
| user_id      | FK → users.id    |
| project_role | VARCHAR          |
| status       | VARCHAR          |
| joined_at    | TIMESTAMP, NULL  |
| left_at      | TIMESTAMP, NULL  |

Kapcsolat:

`projects N — M users`

---

## 5.10. ads

A hirdetéseket tárolja.

| Mező                 | Típus                   |
| -------------------- | ----------------------- |
| id                   | BIGINT, PK              |
| advertiser_id        | FK → advertisers.id     |
| created_by           | FK → users.id           |
| title                | VARCHAR                 |
| description          | TEXT                    |
| location             | VARCHAR, NULL           |
| specialization_id    | FK → specializations.id |
| start_date           | DATE, NULL              |
| end_date             | DATE, NULL              |
| application_deadline | TIMESTAMP, NULL         |
| budget               | DECIMAL, NULL           |
| status               | VARCHAR                 |
| created_at           | TIMESTAMP               |
| published_at         | TIMESTAMP, NULL         |
| updated_at           | TIMESTAMP               |

---

## 5.11. ad_applications

A hirdetésekre beküldött jelentkezéseket tárolja.

| Mező       | Típus         |
| ---------- | ------------- |
| id         | BIGINT, PK    |
| ad_id      | FK → ads.id   |
| user_id    | FK → users.id |
| message    | TEXT, NULL    |
| status     | VARCHAR       |
| created_at | TIMESTAMP     |
| updated_at | TIMESTAMP     |

Az `ad_id` és `user_id` mezők együttesen egyediek.

---

## 5.12. ad_moderations

A hirdetések moderációs előzményeit tárolja.

| Mező         | Típus         |
| ------------ | ------------- |
| id           | BIGINT, PK    |
| ad_id        | FK → ads.id   |
| moderator_id | FK → users.id |
| decision     | VARCHAR       |
| reason       | TEXT, NULL    |
| created_at   | TIMESTAMP     |

---

## 5.13. conversations

A felhasználók közötti beszélgetéseket tárolja.

| Mező       | Típus                  |
| ---------- | ---------------------- |
| id         | BIGINT, PK             |
| project_id | FK → projects.id, NULL |
| created_at | TIMESTAMP              |

---

## 5.14. conversation_participants

A beszélgetések résztvevőit tárolja.

| Mező            | Típus                 |
| --------------- | --------------------- |
| conversation_id | FK → conversations.id |
| user_id         | FK → users.id         |
| joined_at       | TIMESTAMP             |
| last_read_at    | TIMESTAMP, NULL       |

Kapcsolat:

`conversations N — M users`

---

## 5.15. messages

A felhasználók által küldött üzeneteket tárolja.

| Mező            | Típus                 |
| --------------- | --------------------- |
| id              | BIGINT, PK            |
| conversation_id | FK → conversations.id |
| sender_id       | FK → users.id         |
| content         | TEXT                  |
| created_at      | TIMESTAMP             |
| edited_at       | TIMESTAMP, NULL       |

Kapcsolat:

`conversations 1 — N messages`

---

## 5.16. portfolio_items

A tartalomgyártók referenciaanyagait tárolja.

| Mező          | Típus         |
| ------------- | ------------- |
| id            | BIGINT, PK    |
| user_id       | FK → users.id |
| title         | VARCHAR       |
| description   | TEXT, NULL    |
| media_type    | VARCHAR       |
| media_url     | VARCHAR       |
| thumbnail_url | VARCHAR, NULL |
| created_at    | TIMESTAMP     |

Kapcsolat:

`users 1 — N portfolio_items`

---

## 5.17. showcase_media

A nyilvános kezdőlapon megjelenő médiaanyagokat tárolja.

| Mező          | Típus         |
| ------------- | ------------- |
| id            | BIGINT, PK    |
| title         | VARCHAR       |
| description   | TEXT, NULL    |
| media_type    | VARCHAR       |
| media_url     | VARCHAR       |
| thumbnail_url | VARCHAR, NULL |
| is_active     | BOOLEAN       |
| sort_order    | INTEGER       |

---

## 5.18. newsletter_subscriptions

A hírlevélre feliratkozott email címeket tárolja.

| Mező               | Típus           |
| ------------------ | --------------- |
| id                 | BIGINT, PK      |
| email              | VARCHAR, UNIQUE |
| status             | VARCHAR         |
| confirmation_token | VARCHAR, NULL   |
| subscribed_at      | TIMESTAMP       |
| confirmed_at       | TIMESTAMP, NULL |
| unsubscribed_at    | TIMESTAMP, NULL |

---

## 5.19. contact_messages

A kapcsolatfelvételi űrlapon beküldött üzeneteket tárolja.

| Mező       | Típus         |
| ---------- | ------------- |
| id         | BIGINT, PK    |
| name       | VARCHAR       |
| email      | VARCHAR       |
| phone      | VARCHAR, NULL |
| message    | TEXT          |
| status     | VARCHAR       |
| created_at | TIMESTAMP     |

---

## 5.20. email_verification_tokens

Az email címek megerősítéséhez szükséges tokeneket tárolja.

| Mező       | Típus           |
| ---------- | --------------- |
| id         | BIGINT, PK      |
| user_id    | FK → users.id   |
| token      | VARCHAR         |
| expires_at | TIMESTAMP       |
| used_at    | TIMESTAMP, NULL |

---

## 5.21. password_reset_tokens

A jelszó-visszaállításhoz szükséges tokeneket tárolja.

| Mező       | Típus           |
| ---------- | --------------- |
| id         | BIGINT, PK      |
| user_id    | FK → users.id   |
| token      | VARCHAR         |
| expires_at | TIMESTAMP       |
| used_at    | TIMESTAMP, NULL |

---

## 5.22. legal_acceptances

A felhasználók által elfogadott jogi dokumentumokat tárolja.

| Mező             | Típus         |
| ---------------- | ------------- |
| id               | BIGINT, PK    |
| user_id          | FK → users.id |
| document_type    | VARCHAR       |
| document_version | VARCHAR       |
| accepted_at      | TIMESTAMP     |

---

# 6. Az adatbázis fő kapcsolatai

```text
USERS
 │
 ├── 1:1 ── USER_PROFILES
 │
 ├── N:M ── ROLES
 │
 ├── N:M ── SPECIALIZATIONS
 │
 ├── 1:N ── PORTFOLIO_ITEMS
 │
 ├── N:M ── PROJECTS
 │
 ├── 1:N ── AD_APPLICATIONS
 │
 └── N:M ── CONVERSATIONS
                 │
                 └── 1:N ── MESSAGES


ADVERTISERS
 │
 ├── 1:N ── PROJECTS
 │
 └── 1:N ── ADS
                │
                ├── 1:N ── AD_APPLICATIONS
                └── 1:N ── AD_MODERATIONS
```

---

# 7. A rendszer fő működési folyamata

```text
Regisztráció
      ↓
Email-megerősítés
      ↓
Bejelentkezés
      ↓
Profil létrehozása
      ↓
Hirdetés létrehozása
      ↓
Moderáció
      ↓
Hirdetés közzététele
      ↓
Tartalomgyártók jelentkezése
      ↓
Jelentkezések kezelése
      ↓
Projekt létrehozása
      ↓
Résztvevők hozzáadása
      ↓
Kommunikáció
      ↓
Projekt teljesítése
      ↓
Projekt lezárása
```

---

# 8. Megvalósítás

## 8.1. Frontend

A kliensoldali alkalmazás Angular keretrendszerrel készül.

Az Angular feladata:

- a felhasználói felület megjelenítése;
- az oldalak és komponensek kezelése;
- az űrlapok kezelése;
- a felhasználói bevitel ellenőrzése;
- a backenddel történő kommunikáció;
- a felhasználói jogosultságoknak megfelelő felületek megjelenítése;
- a reszponzív felület biztosítása.

A fő Angular komponensek:

- Landing Component;
- Register Component;
- Login Component;
- Main Component;
- Home Component;
- Project Component;
- Message Component;
- Ad Listing Component;
- Ad Viewing Component;
- User Profile Component;
- Moderation Component.

---

## 8.2. Backend

A szerveroldali alkalmazás Laravel keretrendszerrel készül.

A Laravel backend felel:

- regisztrációért;
- bejelentkezésért;
- Google-bejelentkezésért;
- email-megerősítésért;
- jelszó-visszaállításért;
- felhasználói jogosultságokért;
- profilok kezeléséért;
- hirdetések kezeléséért;
- projektek kezeléséért;
- jelentkezések kezeléséért;
- moderációért;
- üzenetek kezeléséért;
- hírlevél-kezelésért;
- kapcsolatfelvételi üzenetek kezeléséért;
- adatbázissal történő kommunikációért.

---

## 8.3. Frontend és backend kapcsolata

Az Angular alkalmazás a Laravel backenddel HTTP kéréseken keresztül kommunikál.

A frontend elküldi a felhasználói műveletekhez szükséges adatokat a backendnek.

A backend:

1. fogadja a kérést;
2. ellenőrzi az adatokat;
3. ellenőrzi a jogosultságokat;
4. elvégzi a szükséges adatbázis-műveletet;
5. választ küld a frontend számára.

Az Angular a kapott válasz alapján frissíti a felhasználói felületet.

---

## 8.4. Adatbázis

A Laravel backend relációs adatbázishoz kapcsolódik.

Az adatbázis biztosítja a rendszerben létrejövő adatok tartós tárolását.

A táblák között elsődleges és idegen kulcsok biztosítják a megfelelő kapcsolatokat és az adatok konzisztenciáját.

---

# 9. Összegzés

A vizsgaremek egy tartalomgyártók és hirdetők közötti együttműködést támogató webes rendszer.

A rendszer fő funkciói:

- regisztráció és bejelentkezés;
- email-megerősítés;
- Google-bejelentkezés;
- jelszó-visszaállítás;
- tartalomgyártói és hirdetői profilok;
- hirdetések létrehozása;
- hirdetések moderálása;
- hirdetések böngészése;
- hirdetésekre történő jelentkezés;
- projektek létrehozása és kezelése;
- projekttagok kezelése;
- felhasználók közötti kommunikáció;
- referenciaanyagok kezelése;
- hírlevél-feliratkozás;
- kapcsolatfelvétel;
- moderátori és adminisztrátori jogosultságok.

A rendszer Angular frontendből, Laravel backendből és relációs adatbázisból épül fel. A projekt célja egy átlátható, biztonságos és könnyen használható platform létrehozása, amely egyetlen rendszerben kezeli a hirdetők és tartalomgyártók közötti kapcsolatfelvételt, jelentkezéseket, kommunikációt és közös projekteket.
