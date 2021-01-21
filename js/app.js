/**
 * @description - Javascript class for animations and stuff
 * @author - kaushik498
**/

// flags 
var lastScrollPos = 0 ;
var sidenavopen = false ;

// window elements
var header = document.querySelector("header");
var togglemenu = document.querySelector(".toggle-menu");
var toggledbarbuttons = document.querySelectorAll(".toggled-nav-bar ul li");

// Intro animation
gsap.to('.hr1', {
    duration:0.5,
    width:'20%',
    marginRight:'0'
})
gsap.to('.hr2', {
    duration:0.5,
    width:'20%',
    marginLeft:'0'
})

gsap.from('.intro-name', {
    ease: Elastic.easeOut.config(1, 0.1),
    duration:3,
    y: 40,
    delay:0.5
})
gsap.from('.intro-name', {
    ease: Expo.easeOut,
    duration:0.5,
    opacity:0,
    delay:0.5
})
gsap.to('.intro', {
    duration: 0.8,
    y: '-100%',
    delay: 2.5
})


// hide & show header
window.addEventListener("scroll", function(){
    var currScrollPos = window.pageYOffset || document.documentElement.currScrollPos ;
    if(currScrollPos > lastScrollPos){
        header.style.top = "-60px" ;
    }else{
        header.style.top = "0" ;
    }
    lastScrollPos = currScrollPos ;
});

// hamburger menu animation
togglemenu.addEventListener("click", function(){
    if(!sidenavopen){
        sidenavopen = true ;
        let tl = gsap.timeline({default: {ease: 'power.out'}});
        tl.to('.line1', {
            duration:.1,
            rotate:'-45deg'
        })
        tl.to('.line2', {
            duration:.1,
            width:'45px',
            rotate:'-90deg'
        }, '-=0.1')
        tl.to('.line3', {
            duration:.1,
            rotate:'45deg'
        }, '-=0.2')
        tl.to('.toggled-nav-bar', {
            ease: Bounce.easeInOut,
            duration:4.5,
            left:'0%'
        }, '-=3')
    }else{
        sidenavopen = false ;
        let t2 = gsap.timeline({default: {ease: 'power.out'}});
        t2.to('.line1', {
            duration:.1,
            rotate:'0deg'
        })
        t2.to('.line2', {
            duration:.1,
            width:'30px',
            rotate:'0deg'
        }, '-=0.1')
        t2.to('.line3', {
            duration:.1,
            rotate:'0deg'
        }, '-=0.2')
        t2.to('.toggled-nav-bar', {
            duration:1,
            left:'-60%'
        }, '-=0.3')
    }
})

toggledbarbuttons.forEach(navbuttons => {
    navbuttons.addEventListener('click', function(){
        if(sidenavopen){
            sidenavopen = false ;
            let t2 = gsap.timeline({default: {ease: 'power.out'}});
            t2.to('.line1', {
                duration:.1,
                rotate:'0deg'
            })
            t2.to('.line2', {
                duration:.1,
                width:'30px',
                rotate:'0deg'
            }, '-=0.1')
            t2.to('.line3', {
                duration:.1,
                rotate:'0deg'
            }, '-=0.2')
            t2.to('.toggled-nav-bar', {
                duration:1,
                left:'-60%'
            }, '-=0.3')
        }
    })
});
