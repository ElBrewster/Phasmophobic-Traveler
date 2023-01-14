import './css/styles.scss';
import "./data/ghost-facts";
import "./classes/Agent"
import Glide from '@glidejs/glide';
import { fetchData } from "./api";
// import './images/turing-logo.png'





//-----event-Listeners-----
window.addEventListener("load", startUp);

//-----functions-----
let agent1 = new Agent()
Promise.all([fetchData("travelers"), fetchData("trips"), fetchData("destinations")])
.then((promisedData) => {
    Agent.

})
Promise(fetchDataOneUser("travelers", idNum))
const startUp = () => {
    
};
//-----glide?
let glide = new Glide('.glide');
glide.mount()
//-----glide^?

//----news-ticker?-----
// const windowLoad = document.addEventListener("load", newsTicker);

// const newsTicker = () => {
//     ghostFacts.forEach(fact => console.log(fact));
// }
//----accordion?-----
let acc = document.getElementsByClassName("accordion");
let i;
let panel = this.nextElementSibling;

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



