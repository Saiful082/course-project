// change navbar styles on scrool 

window.addEventListener('scrool', () => {
    document.querySelector('nav').classList.toggle('window-scrool', window.scrollY > 0)
})

//  show/ hide FAQ answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon 
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') 
        {
            icon.className = "uil uil-minus";
        } else{
            icon.className = "uil uil-plus";
        }
    })
})




// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.getElementsByClassName.display = "flex";
    closeBtn.getElementsByClassName.display = "inline-block";
    menuBtn.style.display = "none";
})