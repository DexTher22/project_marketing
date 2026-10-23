??? az advertiserek lehetnek specializálva? pl. magánszemély, cég stb.  
Mert akkor a creator_specializations lehet user_specializations és creator_id helyett user_id-t használ.  
Ha nagyon akarunk hírlevelet elég users-be berakni egy mezőt, de amúgy felesleges az egész tábla

# Adatbázis

## Táblák

### users
- alapadatok, regisztrációs feltételek
- a roles határozza meg, hogy creator / advertiser / admin / moderator

### creators  / advertisers
- Regisztrációnál ez a két opció lehetséges
- Mind két táblában a user_id a PK így csak creator vagy csak advertiser lehet 1 user

### socials
- 1 userhez több social platform is tartozhat

### advertisements
- FK advertiser_id 
- Egy advertiser több advertisement-et is kitehet

### specializations
- itt határozzuk meg a creator szakosodását

### advertisement_specializations
- kapcsolótábla
- egy advertisement-nél több creator típust lehet megjelölni pl. vágó, filmes stb. 

### creator_specializations
- kapcsolótábla
- több féle specialization lehet egy creator-nak

### ad_applications
- jelentkező creatorokat tart számon advertisements.id alapján

### projects
- 1 advertisement-hez 1 project tartozik 

### project_members
- projects - users kapcsolótábla egyéb adatokkal
- egy project-ben több user is lehet

### conversations
- project_id mező null lehet, 1 projecthez 1 conversation

### conversation_members
- conversations - users kapcsolótábla

### messages
- üzenet tartalma, küldővel és conversation_id-vel

### showcase_media
- A nyilvános kezdőlapon megjelenő médiaanyagokat tárolja.

### contact_messages
- nyílvános kapcsolatfelvételi üzeneteket tárolja

### password_reset_tokens
- jelszóvisszaállítás


