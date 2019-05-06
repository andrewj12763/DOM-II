// Your code goes here
const nav = document.querySelectorAll(".nav a");
const btn = document.querySelectorAll(".btn");
const scroll = document.querySelector(".home");

// ------------------------Mouse over-----------------------
    nav.forEach(function(element) {
        element.addEventListener("mouseover", function() {
         element.style.color = "blue";
         element.style.opacity = ".4";
  });
});
//  ---------------------- Mouse out-------------------------
    nav.forEach(function(element){
        element.addEventListener('mouseout', function(){
            element.style.color = 'pink';
            element.style.opacity = '1';
  });
});
// ------------------------click------------------------
    btn.forEach(function(element){
        element.addEventListener("click", function(){
            element.style.width = '150px';
            element.style.color = 'red'
        });
    });
// ---------------------- dblclick----------------------
    btn.forEach(function(element){
        element.addEventListener("dblclick", function(){
            element.style.width = '200px';
            element.style.color = 'white'
        });
    });
//  ---------------------- scroll-------------------------
    window.addEventListener("scroll", function(event){
        console.log("Power");
    });
//  ---------------------- keydown-------------------------
    window.addEventListener("keydown", function(event){
        console.log("You just pressed a key");
    });
//  ---------------------- contextmenu-------------------------
    window.addEventListener("contextmenu", function(event){
        console.log("You just right clicked");
    });
//  ---------------------- keyup-------------------------
    window.addEventListener("keyup", function(event){
        console.log("You just let go of a key");
    });
//  ---------------------- cut-------------------------
    window.addEventListener("cut", function(event){
        console.log("You just cut");
    });
//  ---------------------- copy-------------------------
    window.addEventListener("copy", function(event){
        console.log("You just copyed");
    });
