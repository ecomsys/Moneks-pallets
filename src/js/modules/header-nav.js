function headerNav(options) {
    const burger = document.querySelector('#headerBurger')
    const headerMenu = document.querySelector('#headerNavigation')
    const mobileMenu = document.querySelector('#mobileNavigation')
    const overlay = document.querySelector('.service-overlay')

    // ---------------------------------  СОЗДАНИЕ КЛОНА МЕНЮ ХЕДЕРА ДЛЯ МОБИЛЬНОГО МЕНЮ -----------------------
    if (headerMenu && mobileMenu) {
        let headerMenuUl = headerMenu.querySelector('ul.menu')
        var clone = headerMenuUl.cloneNode(true)
        mobileMenu.appendChild(clone)
    } else {
        console.log('ПРЕДУПРЕЖДЕНИЕ ! Разберись в разметке !');
    }

    // -----------------------------------------------  Клик по бургеру -------------------------------------------
    burger.addEventListener('click', (event) => {
        event.stopPropagation()
        burger.classList.toggle('active')
        document.body.classList.toggle('no-scroll')

        if (burger.classList.contains('active')) {
            mobileMenu.classList.add('active')
            overlay.style.left = 0;
            overlay.style.background = 'rgb(0,0,0,0.3';
        }
        if (!burger.classList.contains('active')) {
            mobileMenu.classList.remove('active')
            overlay.style.left = -100 + '%';
            overlay.style.background = 'rgb(0,0,0,0';
        }
    })
    // ------------------------------------- close by click --------------------------------------------
    mobileMenu.addEventListener('click', (e) => {

        if (e.target.tagName == 'A') {
            burger.classList.remove('active')
            document.body.classList.remove('no-scroll')

            if (!burger.classList.contains('active')) {
                mobileMenu.classList.remove('active')
                overlay.style.left = -100 + '%';
                overlay.style.background = 'rgb(0,0,0,0';
            }

        }
    })
}
export default headerNav;