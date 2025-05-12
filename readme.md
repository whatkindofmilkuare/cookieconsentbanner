# Cookie Consent Banner – Moduł dla PrestaShop 8.x

Moduł `cookieconsentbanner` dla PrestaShop 8.x umożliwia wyświetlanie banera zgody na pliki cookie zgodnie z przepisami RODO/UE i zarządzanie ich działaniem (blokowanie do czasu zgody). Użytkownik może zaakceptować lub odrzucić pliki cookie, a baner zawiera odnośnik do polityki prywatności lub polityki plików cookie.

## 🔧 Funkcje

- Baner zgody na pliki cookie wyświetlany użytkownikowi przy pierwszej wizycie.
- Blokada ładowania plików cookie do czasu wyrażenia zgody.
- Obsługa akceptacji i odrzucenia.
- Dynamiczne włączanie/wyłączanie skryptów cookies (np. Google Analytics).
- Link do polityki prywatności lub cookie policy.
- Obsługa wielu języków (PL/EN).
- Kompatybilność z PrestaShop 8.0–8.2+.

## 📁 Struktura modułu

```
cookieconsentbanner/
├── cookieconsentbanner.php
├── config.xml
├── cookieconsentbanner.js
├── cookieconsentbanner.css
├── views/
│   └── templates/
│       └── hook/
│           └── displayHeader.tpl
├── translations/
│   ├── en.php
│   └── pl.php
```

## 🛠️ Instalacja

### Metoda 1 – przez panel admina PrestaShop:

1. Pobierz lub spakuj folder `cookieconsentbanner` do pliku `.zip`.
2. Przejdź do **Moduły > Menedżer modułów** w panelu PrestaShop.
3. Kliknij **Dodaj moduł** i wgraj plik ZIP.
4. Po wgraniu kliknij **Zainstaluj**.

### Metoda 2 – manualna:

1. Skopiuj cały folder `cookieconsentbanner` do katalogu `/modules/` w Twojej instalacji PrestaShop.
2. W panelu admina PrestaShop przejdź do **Moduły > Menedżer modułów**.
3. Wyszukaj `cookieconsentbanner` i kliknij **Zainstaluj**.

## 🔗 Link do polityki cookie

Baner zawiera domyślny link: `/content/6-cookie-policy`  
Możesz go edytować w pliku `displayHeader.tpl` lub stworzyć własną stronę CMS z odpowiednim adresem.

## 🧪 Przykład dynamicznego załadowania skryptu (Google Analytics)

W pliku `cookieconsentbanner.js`, wewnątrz funkcji `enableCookies()`, możesz dodać:

```javascript
const script = document.createElement('script');
script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX';
document.head.appendChild(script);
```

## 📜 Licencja

Ten moduł jest open-source i dostępny na licencji MIT.

---

> Stworzony z myślą o prywatności i zgodności z RODO 🇪🇺
