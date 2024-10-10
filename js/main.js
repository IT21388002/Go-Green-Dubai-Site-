// Header Scroll 
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled"); 
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide  
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})


function changeImage(imageSrc) {
    document.getElementById('main-product-image').src = imageSrc;
}




/* scrolla animation */

document.addEventListener("DOMContentLoaded", function() {
    const aboutContent = document.querySelector('.about-content');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutContent.classList.add('scroll-animate');
            }
        });
    });

    observer.observe(aboutContent);
});


document.addEventListener("scroll", function() {
    const aboutSections = document.querySelectorAll(".about-content, .vm-block");
    
    aboutSections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (sectionPosition < screenPosition) {
            section.classList.add("scroll-animate");
        }
    });
});



window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.vm-block');
    elements.forEach(function(element) {
        var position = element.getBoundingClientRect();
        // Check if the element is in view
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('scroll-animate');
        }
    });
});

