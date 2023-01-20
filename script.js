

function addElement() {

   const data = document.getElementById("value").value;
   const element = document.createElement('h1');
   element.innerText = data;
   const targetElement = document.getElementById("list");
   targetElement.appendChild(element);
}