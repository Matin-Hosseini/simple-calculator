let body = document.querySelector('body');
let darkBtn = document.querySelector("#dark-mode-btn");
var clickCount = 0;
let darkText = document.querySelector("#btn-text");
darkBtn.addEventListener("click", ()=>{
    clickCount++;
    body.classList.add("dark-mode");
    darkText.textContent = "Light Mode:";
    if(clickCount==2){
        body.classList.remove("dark-mode");
        darkText.textContent = "Dark Mode:";
        clickCount-=2;
        
    }
})
