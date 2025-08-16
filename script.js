'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const bookingModal = document.getElementById('bookingModal');
const booknowbtn = document.querySelector('#booknowbtn');
const hero_title = document.getElementById('hero_title');
const hero_para = document.getElementById('hero_para');
const bookingbtn = document.getElementById('bookingbtn');
const learn_morebtn = document.getElementById('learn_morebtn');
const More_destintion = document.getElementById('More_destintion');
const popular_list1 = document.getElementById('popular_list1');
const show = document.querySelector(".show")

const checkin = document.querySelector("#checkin");
const checkout = document.querySelector("#checkout")

const more = document.querySelector(".more")

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

more.addEventListener('click' , () => {
  console.log("more destination");
  show.classList.toggle("show");
  if(more.innerHTML === 'MORE'){
    more.innerText = "Less"
  }
  else {
    more.innerHTML = "More"
  }
  // show.style.height = '400px'
})

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);


// book now btn
booknowbtn.addEventListener('click',()=>{
  console.log("hiii");
  bookingModal.style.display = "block";
  hero_title.style.display = 'none';
  hero_para.style.display = 'none';
  learn_morebtn.style.display = 'none';
})


bookingbtn.addEventListener('click',()=>{
  bookingModal.style.display = "none";
  hero_title.style.display = 'block';
  hero_para.style.display = 'block';
  learn_morebtn.style.display = 'block';


  const first = new Date(checkin.value)
  const second = new Date(checkout.value)
  console.log(first);
  console.log(second);
  if(first > second)
  {
    alert("Enter valid checkout date")
  }
})



// store the form details using local 


const form = document.getElementById('bookingForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    const formObject = {};
    
    for (const [key, value] of formData.entries()) {
        formObject[key] = value;
    }

    localStorage.setItem('bookingFormData', JSON.stringify(formObject));
    alert('Form data has been saved!');
    
    form.reset();
});



// More_destintion.addEventListener('click',()=>{
//   More_destintion.style.display = 'none';
//   popular_list1.style.display = 'block';
// })

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});