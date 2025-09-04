const main = document.querySelector(".main");
const setting = document.querySelector(".setting");
const refresh = document.querySelector(".refresh");
const countervalue = document.querySelector("#counter");
const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");
const centerDiv = document.querySelector(".center-div");

let counter = 0;
let isOver = false;

incrementBtn.addEventListener("click", function () {
  if (counter < 35) {
    counter++;
    countervalue.textContent = counter;
  }

  if (counter === 35 && !isOver) {
    countervalue.textContent = "Count Over";
    countervalue.style.marginLeft = "35%";
    countervalue.style.fontSize = "20vh";
    countervalue.style.color = "purple";

    isOver = true;
  }
});


decrementBtn.addEventListener("click", function () {
  if (counter > 0 && !isOver) {   
    counter--;
    countervalue.textContent = counter;
  }

  
  if (isOver) {
    counter = 34; 
    countervalue.textContent = counter;
    countervalue.style.marginLeft = "43%";
    countervalue.style.fontSize = "50vh";
    countervalue.style.color = "white";

    isOver = false;
  }
});



refresh.addEventListener("click",function(){
  refresh.style.rotate="45deg";
  counter = 0;
  countervalue.textContent =counter;
})



function colorclickfonction() {
     const colorChoice = document.querySelector(".color-choise");

  colorChoice.addEventListener("click", function(e) {

    if (e.target.classList.contains("color-div")) {

      const selectedcolor = window.getComputedStyle(e.target).backgroundColor;
      
      localStorage.setItem("bgcolor",selectedcolor)
      
      document.body.style.backgroundColor = selectedcolor;
    }
  });

  const savedColor = localStorage.getItem("bgcolor")
  
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
}




setting.addEventListener("click",function(){

  window.location.href = "setting.html";
})



function closeIcon() {
   window.location.href = "index.html";
}


