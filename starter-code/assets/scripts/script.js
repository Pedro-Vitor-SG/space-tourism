function changeMenuMobile(className) {
    let iconeSandWich = document.querySelector('.sandwich_icon');
    let listItemsMobile = document.querySelector('.list_menu_mobile');
    iconeSandWich.addEventListener('click', function () {
        console.log('Teste')
        if (listItemsMobile.classList.contains(className)) {
            listItemsMobile.classList.remove(className)
            iconeSandWich.classList.add('active')
        }
        else {
            listItemsMobile.classList.add(className)
            iconeSandWich.classList.remove('active')
        }
    })
}

changeMenuMobile('hidden');