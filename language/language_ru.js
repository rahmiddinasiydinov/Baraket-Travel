const languageSelect = document.querySelectorAll('.language-change-ru')
languageSelect.forEach(e => e.addEventListener('change', (e) => {
    const value = e.target.value;
    if(value ==='uz'){
        window.localStorage.setItem('language', value);
        window.location.href = `../${value}`
    }
}))
