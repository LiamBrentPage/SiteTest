let mode = document.getElementById("mode")

let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


mode.onclick = function() {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
        mode.textContent = "🌞";
    }
    
    if (currentTheme === "dark")
    mode.textContent = "🌚";
    
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme)
};
let currentTheme = document.documentElement.getAttribute("data-theme");
if (currentTheme ==="light"){
    mode.textContent = "🌚";
}
if (currentTheme === "dark") {
    mode.textContent = "🌞";

}

setTimeout(function(){
    document.getElementById("loaderWrapper").style.display = "none"; 
    document.body.style.overflow = 'visible';
}, 2000);

window.onbeforeunload = function () {
    document.html.style.display = "none";
    window.scrollTo(0, 0);
  }
