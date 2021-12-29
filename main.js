

    setInterval(change, 1000);
    setInterval(change2, 2000);
    setInterval(change3, 3000);

var x = 2

    function toggle() {
        x += 1
    }

    function change3 () {

        if(x % 2 == 0) {
        document.querySelector("h1").style.color = "#444";
        document.querySelector("header").style.borderBottom = "2px solid #444";
        document.querySelector("header").style.boxShadow = "0px 0px 20px 20px black";

        document.getElementById("aboutme").style.border = "3px solid #555";
        document.getElementById("aboutme").style.boxShadow = "0px 0px 20px 20px black";
        document.getElementById("amh").style.color = "#444";
        document.getElementById("amp").style.color = "#666";

        document.getElementById("aboutme2").style.border = "3px solid #555";
        document.getElementById("aboutme2").style.boxShadow = "0px 0px 20px 20px black";
        document.getElementById("amh2").style.color = "#444";
        document.getElementById("amp2").style.color = "#666";
        }

    }





function change() {
    
    if(x % 2 == 0) {
    document.getElementById("img1").style.width = "330px";
    document.getElementById("img1").style.height = "200px";

    document.getElementById("img2").style.width = "330px";
    document.getElementById("img2").style.height = "200px";

    document.getElementById("img3").style.width = "330px";
    document.getElementById("img3").style.height = "200px";

    document.getElementById("img4").style.width = "330px";
    document.getElementById("img4").style.height = "200px";

    document.querySelector("h1").style.color = "white";
    document.querySelector("header").style.borderBottom = "2px solid white";
    document.querySelector("header").style.boxShadow = "0px 0px 10px 10px #333";

    document.getElementById("aboutme").style.border = "3px solid white";
    document.getElementById("aboutme").style.boxShadow = "0px 0px 10px 10px #333";
    document.getElementById("amh").style.color = "white";
    document.getElementById("amp").style.color = "#999";

    document.getElementById("aboutme2").style.border = "3px solid white";
    document.getElementById("aboutme2").style.boxShadow = "0px 0px 10px 10px #333";
    document.getElementById("amh2").style.color = "white";
    document.getElementById("amp2").style.color = "#999";

    }
}




function change2() {

    if(x % 2 == 0) {

    document.getElementById("img1").style.width = "300px";
    document.getElementById("img1").style.height = "180px";

    document.getElementById("img2").style.width = "300px";
    document.getElementById("img2").style.height = "180px";

    document.getElementById("img3").style.width = "300px";
    document.getElementById("img3").style.height = "180px";

    document.getElementById("img4").style.width = "300px";
    document.getElementById("img4").style.height = "180px";


    }
}

