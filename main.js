
AOS.init();
		
	

/*$(document).ready(function(){


	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 100){
			$("header").css("background" , "#000");
            $("header").css("boxShadow" , "0 -5px 10px #fff");
		}
		else{
			$("header").css("background" , "none");
            $("header").css("boxShadow", "none");
		}
	})



});*/




function fun() {
  document.getElementById('email').value = "";
  document.getElementById('name').value = "";
  document.getElementById('subject').value = "";
  document.getElementById('number').value = "";
  document.getElementById('message').value = "";
}  



    
var news = "MANY THANKS TO JOIN OUR NEWS LETTER !";
function join() {
    alert(news);
}


/* Animation scrool */

/*var smoothScroll = {

    move : function (old, des, actual) {
      easeInOutQuart = function (t) { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; };
      actual += 1;
      ease = easeInOutQuart(actual / 300);
      delta = des - old;
      delta *= ease;
      delta += old;
      window.scrollTo(0, delta);
      if (actual < 300) {
        window.requestAnimationFrame(function () {
          smoothScroll.move(old, des, actual);
        });
      }
    },
  
    linkInit : function (e) {
      e.preventDefault();
      link = e.target.getAttribute("href").substr(1);
      block = document.getElementById(link).offsetTop;
      client = document.documentElement.scrollTop;
  
      smoothScroll.move(client, block, 0);
    },
  
    init : function () {
      links = document.getElementsByTagName("a");
      for (var i = 0; i < links.length; i++) {
        link = links[i].getAttribute("href");
        if (link.search("#") == 0 & link.substr(1) != "") {
          links[i].onclick = smoothScroll.linkInit;
        }
      }
    }
};
  
window.onload = smoothScroll.init; */


/* ========Review slider=========== */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  autoplay: true,
  grabCursor: true,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/* Anime home page */

let tl = gsap.timeline();


tl.from(" .text-content h1 ", {
  duration: 1.30,
  opacity: 1,
  y: -50,
  autoAlpha: 0,
  ease: Power3.out,
  stagger: 1.5
}).from(".text-content p", {
    duration: 0.5,
    y: 150,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 1.5,
}).from(".text-content .btn", {
  duration: 0.75,
  x: -100,
  autoAlpha: 0,
  ease: "elastic.out(1, 1)",
  stagger: {
    each: 0.75,
    amount: 0.5
  }
}, "+=0.50");

/************************ACTIVE SCROLL******************************* */

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 0;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

