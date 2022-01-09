


// Glow effect 2 seconds after loading site

setTimeout(glow, 2000);

function glow() {
    document.querySelector("body").style.color = "#999";
    document.getElementById("aboutme").style.border = "2px solid white";
    document.getElementById("aboutme").style.boxShadow = "0px 0px 10px 10px #333";
    document.getElementById("aboutme2").style.border = "2px solid white";
    document.getElementById("aboutme2").style.boxShadow = "0px 0px 10px 10px #333";
}


