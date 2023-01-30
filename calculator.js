const nextBtn = document.getElementById("nextBtn")
const prevBtn = document.getElementById("prevBtn")
let imgOne = document.getElementById("one")
let imgTwo = document.getElementById("two")

nextBtn.addEventListener('click', function(){
    imgOne.style.display = "none"
    imgTwo.style.display = "block"
    nextBtn.style.opacity = "0"
    prevBtn.style.opacity = "1"
});
prevBtn.addEventListener('click', function(){
    imgTwo.style.display = "none"
    imgOne.style.display = "block"
    nextBtn.style.opacity = "1"
    prevBtn.style.opacity = "0"
});
const nextBtnTwo = document.getElementById("nextBtnTwo")
const prevBtnTwo = document.getElementById("prevBtnTwo")
let imgThree = document.getElementById("three")
let imgFour = document.getElementById("four")

nextBtnTwo.addEventListener('click', function(){
    imgThree.style.display = "none"
    imgFour.style.display = "block"
    nextBtnTwo.style.opacity = "0"
    prevBtnTwo.style.opacity = "1"
});
prevBtnTwo.addEventListener('click', function(){
    imgFour.style.display = "none"
    imgThree.style.display = "block"
    nextBtnTwo.style.opacity = "1"
    prevBtnTwo.style.opacity = "0"
});