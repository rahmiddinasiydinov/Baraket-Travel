language_uz.addEventListener('change', (e) => {
    const value = e.target.value;
    if(value ==='ru'){
        window.localStorage.setItem('language', value);
        window.location.href = `../${value}`
    }
})

