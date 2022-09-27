let continueReading = document.getElementById("continueReading");
let reading = document.getElementById("reading");
let colorBackground = document.getElementById("colorBackground");
let footerColor = document.getElementById("footerColor");

continueReading.addEventListener("click", function(){
    reading.style.display = "block";
    continueReading.style.display = "none";
    document.getElementById("noSubscribe").style.display = "none";
    colorBackground.classList.remove("homeBackground");
    colorBackground.classList.add("backgroundColour");
    footerColor.classList.remove("contactFooter");
    footerColor.classList.add("contact");
})

document.getElementById("clickMe").addEventListener('click',function(){
    document.getElementById("clickMeThanks").style.display = "block";
    document.getElementById("clickMe").style.display = "none";
    document.getElementById("clickMeMessage").style.display = "none";
})