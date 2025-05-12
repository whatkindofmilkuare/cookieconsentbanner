document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('cookie-consent-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');

    if (!getCookie('cookie_consent')) {
        banner.classList.remove('hidden');
    }

    acceptBtn.addEventListener('click', function () {
        setCookie('cookie_consent', 'accepted', 365);
        enableCookies();
        banner.classList.add('hidden');
    });

    rejectBtn.addEventListener('click', function () {
        setCookie('cookie_consent', 'rejected', 365);
        disableCookies();
        banner.classList.add('hidden');
    });

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function enableCookies() {
        // Tutaj można dodać kod do aktywacji cookies
        // np. załadować skrypty analityczne, które używają cookies
        // lub ustawić cookies, które są wymagane do działania strony
    }

    function disableCookies() {
        // Można usunąć już zapisane cookies (tylko te ustawione przez JS)
        // lub zablokować dalsze ich tworzenie
    }
});
