const toggleTheme = document.getElementById('toggleTheme');
const dataTheme = document.documentElement

function changeTheme () {
    
    const currentTheme = dataTheme.getAttribute('data-theme')
    
    toggleTheme.classList.toggle('bi-sun');
    toggleTheme.classList.toggle('bi-moon-stars');

    if (currentTheme === "Blue") {
        dataTheme.setAttribute('data-theme', 'Light')
    } else {
        dataTheme.setAttribute('data-theme', 'Blue')
    }
}

toggleTheme.addEventListener("click", changeTheme);