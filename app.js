function darkmode() {
    let bg = document.querySelector('.dark')
    let title = document.querySelector('.header')

    let items = document.querySelectorAll('.item')
    for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle('items-dark')
    }


    let infoItems = document.querySelectorAll('h2')
    for (let i = 0; i < infoItems.length; i++) {
        infoItems[i].classList.toggle('info-items-dark')
    }

    let infoItems2 = document.querySelectorAll('p')
    for (let i = 0; i < infoItems2.length; i++) {
        infoItems2[i].classList.toggle('info-items-dark')
    }

    let colorH1 = document.querySelector('h1')
    let switchDark = document.querySelector('.switch')
    let sliderDark = document.querySelector('.slider')
    bg.classList.toggle('body-dark')
    title.classList.toggle('header-dark')
    colorH1.classList.toggle('h1-dark')
    switchDark.classList.toggle('switch-dark')
    sliderDark.classList.toggle('slider-dark')
}