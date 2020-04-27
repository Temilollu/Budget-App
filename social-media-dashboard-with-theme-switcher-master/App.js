const button = document.querySelector(".outer")
const body = document.querySelector("body");
const colorText = document.getElementById("color-text");

button.addEventListener('click', ()=>{
    body.classList.toggle("dark-mode");
    button.classList.toggle("active")
    if(colorText.textContent === "Light Mode"){
        colorText.textContent = "Dark Mode"
    }
    else{
        colorText.textContent = "Light Mode"
    }
    
})