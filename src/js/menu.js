// Modal menu
let openMenuBtn = document.getElementsByClassName('open-header-menu-button')[0];
let closeMenuBtn = document.getElementsByClassName('close-button')[0];
let menu = document.getElementsByClassName('menu-header')[0];
let menuItems = menu.getElementsByTagName('a');
openMenuBtn.addEventListener('click', function() {
    menu.classList.add('is-open');
});
closeMenuBtn.addEventListener('click', function() {
    menu.classList.remove('is-open');
});
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function() {
        menu.classList.remove('is-open');
    });
}