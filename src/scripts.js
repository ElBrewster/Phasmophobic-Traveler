// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (-->SCSS) file
import './css/styles.scss';
import "./data/ghost-facts";
import Swiper from 'swiper/bundle';
import 'swiper/scss/bundle';
const swiper = new Swiper(...);
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// const windowLoad = document.addEventListener("load", newsTicker);

// const newsTicker = () => {
//     ghostFacts.forEach(fact => console.log(fact));
// }
console.log('This is the JavaScript entry file - your code begins here.');
// -->w3 schools script for accordion buttions:
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }

