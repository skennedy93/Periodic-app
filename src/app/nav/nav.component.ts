import { Component, OnInit } from '@angular/core';
import { faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  faSun = faSun;
  constructor() { }

  ngOnInit() {
    
    const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');


function switchTheme(e) {
    if (e.target.checked) {
        document.getElementById("drawer").setAttribute("class", "dark-nav");
        document.getElementById("blackout").setAttribute("class", "dark-blackout");
        document.getElementById("container-blackout").setAttribute("class", "container-dark");
        document.getElementById("navbar").setAttribute("class", "nav-dark");
        document.getElementById("calls").setAttribute("class", "calls-dark");
        document.getElementById("response").setAttribute("class", "response-dark");
        document.getElementById("drawer-title").setAttribute("class", "dark-header");
        document.getElementById("container-calls").setAttribute("class", "container-dark");
        document.getElementById("container-response").setAttribute("class", "container-dark");
        document.getElementById("try").setAttribute("class", "container-dark");
        document.getElementById("image-box").setAttribute("class", "dark-box");
        document.getElementById("nav-box").setAttribute("class", "icon-dark");
        document.querySelectorAll("button")[0].setAttribute("class", "button-dark");
    }
    else {
        document.getElementById("drawer").setAttribute("class", "light-nav");
        document.getElementById("blackout").setAttribute("class", "light-blackout");
        document.getElementById("container-blackout").setAttribute("class", "container-light");
        document.getElementById("navbar").setAttribute("class", "nav-light");
        document.getElementById("calls").setAttribute("class", "calls-light");
        document.getElementById("response").setAttribute("class", "response-light");
        document.getElementById("drawer-title").setAttribute("class", "light-header");
        document.getElementById("container-calls").setAttribute("class", "container-light");
        document.getElementById("container-response").setAttribute("class", "container-light");
        document.getElementById("try").setAttribute("class", "container-light");
        document.getElementById("image-box").setAttribute("class", "light-box");
        document.getElementById("nav-box").setAttribute("class", "icon-light");
        document.querySelectorAll("button")[0].setAttribute("class", "button");
        
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
  }

}
