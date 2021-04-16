console.log('index.js connected')

import {renderHome } from "./home.js";
import {pageLoad} from './pageload.js'
import './styles.css'
import {renderMenu} from "./menu.js"
import {renderContact} from './contactLoad.js'


pageLoad();
renderHome()


// Write the tab-switching logic inside of index.js. You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again.
 
  const navItems = document.querySelectorAll("li");
  console.log(navItems);

  for (const navLink of navItems) {
    navLink.addEventListener("click", function (event) {
      const input = event.target.textContent;
      console.log(input);
      //clear previously displayed section
      clearContent();

      //remove active class
      navItems.forEach(function(element){
        element.classList.remove('active')
      })

      if (input === "Home") {
        event.target.classList.add('active')
        renderHome();
      } else if (input === "Menu") {
        event.target.classList.add("active");
        renderMenu();
      }else if (input === "Contact"){
        event.target.classList.add("active");
        renderContact();
      }
    });
  }

const clearContent = function () {
  const content = document.querySelector('#content')
  content.innerHTML = '';
}