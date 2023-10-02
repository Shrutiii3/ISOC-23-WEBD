let navbarMenu = document.querySelector('.navbar-menu');
let dropdownIsOpen = false;
// for preloader
var preloader= document.getElementById('loading');
function myFunction(){
  preloader.style.display = 'none';
}
// responsive header
burger=document.querySelector('.burger')
navbar=document.querySelector('.header')
navList=document.querySelector('.main-nav')
burger.addEventListener('click',()=>{
  navbar.classList.toggle('hResp');
  navList.classList.toggle('navResp');

})
// Auto Scroll
scroller=document.querySelector('.scroll')
let scrollerId;
let paused=true;
let speed=2;
let interval= speed*5;
function startScroll(){
  let id= setInterval(function (){
    window.scrollBy(0,2);
    if(
      window.innerHeight + window.scrollY==document.body.offsetHeight
    ){
      //reached end of page
      stopScroll();
    }
  },interval);
  return id;
}
function stopScroll(){
  clearInterval(scrollerId);
}
scroller.addEventListener('click',()=>{
  if(paused==true){
    scrollerId=startScroll();
    paused=false;
  }else{
    stopScroll();
    paused=true
  }
});



// Handle dropdown menu toggle
navbarMenu.addEventListener('click', (event) => {
  if (event.target.classList.contains('dropdown-toggler')) {
    let target = document.querySelector(`#${event.target.dataset.dropdown}`);

    if (target) {
      if (target.classList.contains('show')) {
        target.classList.remove('show');
        dropdownIsOpen = false;
      } else {
        target.classList.add('show');
        dropdownIsOpen = true;
      }
    }
  }
});

// Handle closing dropdowns if a user clicks outside
document.body.addEventListener('click', (event) => {
  if (dropdownIsOpen) {
    navbarMenu.querySelectorAll('.dropdown').forEach((dropdown) => {
      let targetIsDropdown = dropdown == event.target;
      let clickedOnDropdownToggle = event.target.classList.contains('dropdown-toggler');

      if (clickedOnDropdownToggle) {
        return;
      }

      if (!targetIsDropdown && !dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
      }
    });
  }
});

// Open links in mobiles
function handleSmallScreens() {
  document.querySelector('.navbar-toggler').addEventListener('click', () => {
    if (!navbarMenu.classList.contains('active')) {
      navbarMenu.classList.add('active');
    } else {
      navbarMenu.classList.remove('active');
    }
  });
}

handleSmallScreens();

