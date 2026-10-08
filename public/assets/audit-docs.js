(() => {
    const root = document.documentElement;
    const themeButton = document.getElementById('theme-toggle');

    try {
        if (localStorage.getItem('theme') === 'dark') root.classList.add('dark');
    } catch {}

    themeButton?.addEventListener('click', () => {
        const dark = root.classList.toggle('dark');
        try {
            localStorage.setItem('theme', dark ? 'dark' : 'light');
        } catch {}
        themeButton.setAttribute('aria-pressed', String(dark));
    });
})();
