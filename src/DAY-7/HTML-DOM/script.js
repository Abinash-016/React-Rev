const heading=document.getElementById("count");
const button=document.getElementById("btn");

button.addEventListener("click", function(){
    let currentValue=heading.innerText;
    currentValue=Number(currentValue) +1;
    heading.innerText=currentValue;
})