const menu = document.querySelector('.button_menu_mobile')
const button_close_menu = document.querySelector('.button_close_menu')
const nav_menu = document.querySelector('.nav_menu')


menu.addEventListener("click",function() {
    nav_menu.classList.remove('invisible')   
    button_close_menu.classList.remove('invisible')
    menu.classList.add('invisible')
});


button_close_menu.addEventListener("click", function(){
    nav_menu.classList.add('invisible')
    button_close_menu.classList.add('invisible')
    menu.classList.remove('invisible')
})