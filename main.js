const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-text");
const sliderContainer = document.querySelector(".slide-container");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const images = document.querySelectorAll(".slider-img");
const meunBtn = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const dropDown= document.querySelector('.dropdown-text');
const subMenu = document.querySelector('.sub-menu')



/////variables///////
let currentSlide = 1;
const maxSlide = images.length;

//////functions////////
const showInput = () => {
  searchInput.classList.toggle("show-search");
  searchBtn.classList.toggle("hidden");
};
const showMenu = ()=>{
  navLinks.classList.toggle('nav-active');

}
const showSubMenu = () =>{
  subMenu.classList.toggle('sub-menu-active');
}

const prevSlide = () => {
  clearInterval(interval)
  if (currentSlide < 1) currentSlide = 3;
  currentSlide--;
  sliderContainer.style.left = `${currentSlide * -100}%`;
};

const nextSlide = () => {
  clearInterval(interval)
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  sliderContainer.style.left = `${currentSlide * -100}%`;
};


/////////Event Handlers//////////
searchBtn.addEventListener("click", showInput);

meunBtn.addEventListener('click', showMenu);
dropDown.addEventListener('click', showSubMenu);
nextButton.addEventListener('click', nextSlide)
prevButton.addEventListener('click', prevSlide)

const interval = setInterval(() => {
  if(currentSlide === maxSlide-1){
    currentSlide=0;
  }else{
    currentSlide++;
  }
    
  
  sliderContainer.style.left = `${currentSlide * -100}%`;
}, 4000);


