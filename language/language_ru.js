language_ru.addEventListener('change', (e) => {
    const value = e.target.value;
    if(value ==='uz'){
        window.localStorage.setItem('language', value);
        window.location.href = `../${value}`
    }
})

