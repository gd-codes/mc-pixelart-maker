
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
systemTheme.addEventListener('change', toggleThemeAutomatic);

window.addEventListener('load', function() {
    const ldswitch0 = document.getElementById('light-dark-toggle');
    const installPWAbtn = document.getElementById('tryOfflineBtn');
    ldswitch0.onclick = toggleTheme;
    toggleThemeAutomatic(systemTheme);
    installPWAbtn.onclick = installPWA;
});

function toggleTheme(click_event) {
    const csmt = document.getElementById('colorSchemeMetaTag');
    const body = document.getElementsByTagName('body')[0];
    if (click_event.target.checked) {
        body.classList.add('dark-theme'); body.style.colorScheme = 'dark';
        csmt.setAttribute('content', "dark light");
    } else {
        body.classList.remove('dark-theme'); body.style.colorScheme = 'light';
        csmt.setAttribute('content', "light dark");
    }
}

function toggleThemeAutomatic(media_event) {
    const ldswitch0 = document.getElementById('light-dark-toggle');
    const csmt = document.getElementById('colorSchemeMetaTag');
    const body = document.getElementsByTagName('body')[0];
    if (media_event.matches) {
        body.classList.add('dark-theme'); body.style.colorScheme = 'dark';
        csmt.setAttribute('content', "dark light");
        ldswitch0.checked = true;
    } else {
        body.classList.remove('dark-theme'); body.style.colorScheme = 'light';
        csmt.setAttribute('content', "light dark");
        ldswitch0.checked = false;
    }
}

function installPWA(event) {
    if ('serviceWorker' in window.navigator) {
        navigator.serviceWorker.getRegistrations().then(function(regs) {
            if (regs[0] != undefined && regs[0].active) {
                alert('Installed !');
            } else {
                alert(`Attempting to install the Offline website... \nClose this dialog to continue.\n
Note : The cached website will not persist in an Incognito/Private tab. Please ensure that you are trying this in a regular browser tab \
with Storage & ServiceWorker permissions allowed, to be able to download the Web App for Desktop.`);
            }
        });
        // Path will be relative to the HTML file
        navigator.serviceWorker.register('./sw.js');
    
    } else {
        alert(`Oops ! It looks like your browser does not support local caching currently.\n
Ensure that this page is not open in an Incognito / Private window and that Service Workers / Cache Storage are allowed in Site / Cookie settings.\n
On desktop, PWAs may not be fully supported in browsers other than recent versions of Chrome, Edge & Safari.`);
    }
}
