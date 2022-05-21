function burgerMenu () {

    const bars = document.getElementById('bars')

    const xmark = document.getElementById('xmark')

    const navigation = document.getElementById('navigation')

    const burgerMenu = document.getElementById('hamburgerMenu')

    bars.addEventListener('click', function () {
    
        bars.classList.add('none')
        hamburgerMenu.classList.remove('none')
        navigation.classList.add('none')
        xmark.classList.remove('none')

    })

    xmark.addEventListener('click', function () {

        xmark.classList.add('none')
        hamburgerMenu.classList.add('none')
        navigation.classList.remove('none')
        bars.classList.remove('none')

    })
}

burgerMenu();


