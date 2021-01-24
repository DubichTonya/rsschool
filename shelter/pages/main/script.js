"use strict";window.onload=function(){function t(t){var n=document.createElement("li");return n.classList.add("petsSlider__item"),n.innerHTML='\n<article class="pet">\n<div class="pet__img">\n<img src="'.concat(r).concat(t.img,'" alt="').concat(t.name,'">\n</div>\n<h4 class="pet__title">\n').concat(t.name,'\n</h4>\n<a href="#!" class="btn btn-2 pet__btn">Learn more</a>\n</article>'),n}function n(t){var n=document.createElement("div");return n.classList.add("petsInformation"),n.innerHTML='\n<div class="petsInformation__hover"></div>\n<div class="petsInformation__card">\n<button><span class="visually-hidden">Close</span></button>\n<div class="petsInformation__cardImg">\n<img src="'.concat(r).concat(t.img,'" alt="').concat(t.name,'">\n</div>\n<div class="petsInformation__cardInfo">\n<div class="petsInformation__cardInfo-name">\n').concat(t.name,'\n</div>\n<div class="petsInformation__cardInfo-block">\n<span>').concat(t.type,"</span> - <span>").concat(t.breed,'</span>\n</div>\n<div class="petsInformation__cardInfo-text">\n').concat(t.description,'\n</div>\n<ul class="petsInformation__list">\n<li><span><strong>Age:</strong> ').concat(t.age,"</span></li>\n<li><span><strong>Inoculations:</strong> ").concat(t.inoculations,"</span></li>\n<li><span><strong>Diseases:</strong> ").concat(t.diseases,"</span></li>\n<li><span><strong>Parasites:</strong> ").concat(t.parasites,"</span></li>\n</ul>\n</div>\n</div>"),n}function e(){fetch("data.json").then(function(t){return t.json()}).then(function(e){function i(t,n){f=!1,r[t].classList.add(n),r[t].addEventListener("animationend",function(){this.classList.remove("active",n)})}function c(t,n){r[t].classList.add("next",n),r[t].addEventListener("animationend",function(){r[t].classList.remove("next",n),r[t].classList.add("active"),f=!0})}function o(t,n){a="left"===n?a.map(function(n){return i(n,"to-right"),n=(n-t+r.length)%r.length,c(n,"from-left"),n}):a.map(function(n){return i(n,"to-left"),n=(n+t+r.length)%r.length,c(n,"from-right"),n})}for(var a=[],s=0;s<e.length;s++)m.appendChild(t(e[s]));var r=document.querySelectorAll(".petsSlider__item");r.forEach(function(t,i){t.addEventListener("click",function(t){t.preventDefault(),document.body.appendChild(n(e[i])),document.querySelector(".petsInformation").classList.add("active"),console.log(document.querySelector(".petsInformation")),document.querySelector(".petsInformation").addEventListener("click",function(t){("BUTTON"===t.target.tagName||t.target.classList.contains("petsInformation__hover"))&&(document.querySelector(".petsInformation").classList.remove("active"),document.body.removeChild(document.querySelector(".petsInformation")))})})}),l.clientWidth<768?(a=[0],a.forEach(function(t){r[t].classList.add("active")}),d.addEventListener("click",function(){!0===f&&o(1,"right")}),u.addEventListener("click",function(){f&&o(1,"left")})):l.clientWidth>767&&l.clientWidth<1280?(a=[0,1],a.forEach(function(t){r[t].classList.add("active")}),d.addEventListener("click",function(){!0===f&&o(2,"right")}),u.addEventListener("click",function(){f&&o(2,"left")})):l.clientWidth>1279&&(a=[0,1,2],a.forEach(function(t){r[t].classList.add("active")}),d.addEventListener("click",function(){!0===f&&o(3,"right")}),u.addEventListener("click",function(){f&&o(3,"left")}))})}function i(){o.classList.remove("navigation-active"),a.classList.remove("menu-hover"),document.querySelector("body").style.overflowY="auto",setTimeout(function(){document.querySelector(".startScreen__info").style.zIndex="120"},600)}var c=document.querySelector(".menu__btn"),o=document.querySelector(".navigation"),a=document.querySelector("header"),s=document.querySelectorAll(".navigation__item"),r="../../assets/images/",l=document.documentElement,d=document.querySelector(".arrow-right"),u=document.querySelector(".arrow-left"),m=document.querySelector(".petsSlider__list"),f=!0;e(),c.addEventListener("click",function(t){o.classList.toggle("navigation-active"),a.classList.toggle("menu-hover"),document.querySelector("body").style.overflowY="hidden",o.classList.contains("navigation-active")?document.querySelector(".startScreen__info").style.zIndex="0":(document.querySelector("body").style.overflowY="auto",setTimeout(function(){document.querySelector(".startScreen__info").style.zIndex="120"},600))}),document.querySelector("header").addEventListener("click",function(t){t.target.classList.contains("navigation-active")&&i()});for(var v=0;v<s.length;v++){s[v].addEventListener("click",function(t){a.classList.contains("menu-hover")&&(t.target.classList.contains("navigation__item")||t.target.parentElement.classList.contains("navigation__item"))&&i()})}};