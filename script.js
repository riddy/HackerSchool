var counterDisplay = document.getElementById("number");
var counterMinus = document.getElementById("minus");
var counterPlus = document.getElementById("plus");

var count = 0;

updateDisplay();

counterPlus.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinus.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplay.innerHTML = count;
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    counterDisplay.style.color = "#"+randomColor;
};



function count(){


  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("number").style.color = "#"+randomColor;

  var number = document.getElementById("number").innerHTML;
  console.log("number is "+ number);
  number = Integer.valueOf(number) +=1;
}