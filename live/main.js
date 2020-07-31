$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});

var typed = new Typed('.type', {
        strings: [
            'Double Degree.', 
            'Learner.',
            'Speaker.',
            'DevOps Consultant.',
            'Developer.',
            'Business Analyst.',
            'Engineering Consultant.',
            'Waterloo Warrior.',
            'Laurier Goldenhawk.',
            'SHAD Fellow.',
            'Westlane Spartan.'
        ],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
});



const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')

const portoflioImgs = document.querySelectorAll('.logoWrapper')

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');

    })

    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');

    })
})


$(document).ready(function() {
    $('.navbar').localScroll({duration:800});
 });