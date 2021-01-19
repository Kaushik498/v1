/**
 * @description - Javascript class for animations and stuff
 * @author - kaushik498
**/

// all variables
var lastScrollPos = 0 ;
header = document.querySelector("header");

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