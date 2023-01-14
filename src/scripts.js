import './css/styles.scss';
import "./data/ghost-facts";
import Glide from '@glidejs/glide'
// import './images/turing-logo.png'

//-----glide?
let glide = new Glide('.glide');
glide.mount()
//-----glide^?

// const windowLoad = document.addEventListener("load", newsTicker);

// const newsTicker = () => {
//     ghostFacts.forEach(fact => console.log(fact));
// }

console.log('This is the JavaScript entry file - your code begins here.');
//-----
window.addEventListener("load", startUp);
   
const startUp = () => {
    firstBtnLoop();
    secondBtnLoop();
};

//----accordion-----
let acc = document.getElementsByClassName("accordion");
let i;
let panel = this.nextElementSibling;

const firstBtnLoop = () => {
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
      });
    }
}

const secondBtnLoop = () => {
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
}


