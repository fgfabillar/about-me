//1. Sticky header
window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
//This code attaches an event listener to the window's scroll event. It selects the header element in the document. It toggles the 'sticky' class on the header element based on the value of window.scrollY.
//When the user scrolls down (window.scrollY > 0), the 'sticky' class is added to the header, making it stick to the top of the viewport.
//When the user scrolls back to the top (window.scrollY <= 0), the 'sticky' class is removed, allowing the header to return to its original position.



//2. Greeting message
var greeting = "Welcome to my page!";

function greet(){
    alert(greeting);
}

document.addEventListener("DOMContentLoaded", function(event){
    greet();
});

//A string variable greeting is created with the value "Welcome to my page!". The greet() function is defined to show an alert box with the content of the greeting variable.
//An event listener is set up to detect when the DOM content is fully loaded. Once the DOM is ready, it triggers a function.
//Inside this function, the greet() function is called, causing the greeting message to be shown in an alert box when the page is loaded.



//3. Change image when hovered using mouse over & mouse out
function setNewImage(){
    var aboutMePicture = document.getElementById("image1");
    aboutMePicture.src= "assets/images/aboutmepic2.jpg";
}
//Function setNewImage():
//This function is triggered when the mouse is over the image. It retrieves the image element with the ID "image1" and changes its source attribute to "assets/images/aboutmepic2.jpg".

function setOldImage(){
    var aboutMePicture = document.getElementById("image1");
    aboutMePicture.src= "assets/images/aboutmepic1.png";
}
//Function setOldImage():
//This function is triggered when the mouse leaves the image. It retrieves the image element with the ID "image1" and changes its source attribute back to "assets/images/aboutmepic1.png".



//4. Change color of the h1 text every 5 seconds
var colors = ["#56A5A2", "#a256a5", "#a55659", "#5681a5"];
var currentIndex = 0;

function changeTextColor() {
    var h1Element = document.querySelector('.textBX h1');
    h1Element.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

document.addEventListener("DOMContentLoaded", function() {
    var h1Element = document.querySelector('.textBX h1');
    h1Element.style.color = colors[currentIndex];
});

setInterval(changeTextColor, 5000);

//The script changes the color of the <h1> text every 5 seconds. It uses an array of hex color codes.
//The changeTextColor function updates the color of the <h1> element in the DOM. The setInterval function, based on the DOM, calls changeTextColor every 5 seconds.

