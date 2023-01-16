 
 let count=0;

 function change() {
    document.getElementById("output").innerText=count;
}

function increment() {
    count++;
    
    document.getElementById("output").innerText=count;

    if(count>10) {
        alert("your count is greater than 10");
    }
    
}

change();

