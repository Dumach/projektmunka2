
# Projektmunka2

Csapatommal egy web technológián alapuló játékot készítünk el. Ahol a játékosok művészi képességeiket és
kreativitásukat felhasználva egymással versenyeznek.

Széchenyi István Egyetemen tanult tárgyak:

 - Projektmunka 1. (GKNB_INTM004)
 - Projektmunka 2. (GKNB_INTM005) 

 érdekében létrehozott repository.

 # Követelmények:

 Legyen a gépeden ezek az eszközök:
  - Fejletteb szövegszerkesztő (pl: Visual Studio Code)
  - [NodeJS futtató környezet](https://nodejs.org/en/download/prebuilt-installer)
  - [Pocketbase adatbázis](https://pocketbase.io/docs/)

# Fejlesztés:

## Unix alapú rendeszeren:

Lépj be egyik mappába ( pl: ./backend ), majd telepítsd a csomagokat:

    npm install

Olyan projekt, amiben HTML fájl található elindíthatod:
     
    npm run dev

Ha nincs akkor:

    node ./main.js

Adatbázis (Pocketbase) elindításához nyiss egy új terminált:

    ./<pocketbase_exe_helye>/pocketbase serve
    ./pocketbase_0.22.20_linux_amd64/pocketbase serve

## Windows-on:

Fájl eléréséhez használj **\\** backslash-t

Ha nincs akkor:

    node .\main.js

Adatbázis (Pocketbase) elindításához nyiss egy új terminált:

    .\<pocketbase_exe_helye>\pocketbase serve
    .\pocketbase_0.22.20_linux_amd64\pocketbase serve
