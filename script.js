
"use strict";

const itemText =[];

function input() {
   const data = document.getElementById("value").value;
   return data;
}
function doesExists(data) {
  return itemText.includes(data);
}

function createElement(data) {
   const item = document.createElement('h1');
   item.innerText = data;
   return item;
}
function addElement() {

   const inputItem = input();
   if (inputItem ==="") {
      alert("Emty string ");
      return;
   }
   if(doesExists(inputItem)) {
      alert("string already exists");
      return;
   }
   itemText.push(inputItem);
   const element = createElement(inputItem);

   const targetElement = document.getElementById("list");
   targetElement.appendChild(element);
}