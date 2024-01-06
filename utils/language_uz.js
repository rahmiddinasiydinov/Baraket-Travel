const languageSelect = document.querySelectorAll('.language-change-uz')
languageSelect.forEach(e => e.addEventListener('change', (e) => {
    const value = e.target.value;
    console.log('hiii')
    if(value ==='ru'){
        window.localStorage.setItem('language', value);
        window.location.href = `../${value}`
    }
}))
