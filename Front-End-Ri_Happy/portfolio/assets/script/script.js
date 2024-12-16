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

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
  })
})

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
})