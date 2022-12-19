const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const generateBtn = document.querySelector("button");
const adviceDiv = document.querySelector(".advice");

async function generateAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    
    adviceId.textContent = `ADVICE #${advice.slip.id}`;
    adviceText.textContent = advice.slip.advice;
}

function setMaximumWidth() {
    adviceDiv.style.setProperty("max-width", (window.innerWidth > 525)? "484px" : "335px");
}

generateAdvice();
setMaximumWidth(); 

generateBtn.onclick = generateAdvice;
window.onresize = setMaximumWidth;