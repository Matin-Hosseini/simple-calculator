let body = document.querySelector('body');
let darkBtn = document.querySelector("#dark-mode-btn");
var clickCount = 0;
darkBtn.addEventListener("click", ()=>{
    
    clickCount++;
    body.classList.add("dark-mode");
    darkBtn.textContent = "Light Mode";
    if(clickCount==2){
        body.classList.remove("dark-mode");
        clickCount-=2;
        darkBtn.textContent = "Dark Mode";
    }
})
