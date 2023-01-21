
"use strict";

function input() {
   const data = document.getElementById("value").value;
   return data;
}
function doesExists(data) {

   const items = [...document.getElementsByTagName('h1')];
   const item = items.find(function(item) {
     return (item.innerText === data);
   });
   return Boolean(item);
}

function createElement(data) {
   const item = document.createElement('h1');
   item.innerText = data;
   return item;
}
function addElement() {

   const data = input();
   if (data ==="") {
      alert("Emty string ");
      return;
   }
   if(doesExists(data)) {
      alert("string already exists");
      return;
   }
   const element = createElement(data);
 
   const targetElement = document.getElementById("list");
   targetElement.appendChild(element);
}