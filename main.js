
let menuToggle = document.querySelector('.menuToggle');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
}



// Language Options

let english_language = "SELECTED";
let serbian_language = "NONE"

let who_am_i = '';
let contact_me_h1 = '';


function english() {
  english_language = "SELECTED";
  serbian_language = "NONE";
  console.log("English language selected.")
  texts = []
  document.getElementById("options").classList.add("loader_fade");
  document.getElementById("language_select").classList.add("loader_fade")

  setTimeout(remove_all,3000)

  contact_me_h1 = "Contact Me:";

  updateTexts();
}

function serbian() {
  serbian_language = "SELECTED";
  english_language = "NONE";
  console.log("Serbian language selected.")
  texts = []
  document.getElementById("options").classList.add("loader_fade");
  document.getElementById("language_select").classList.add("loader_fade")

  setTimeout(remove_all,2000)
  

  

  contact_me_h1 = "Kontaktiraj me:";

  updateTexts();
}




//---------------------------------------------------- ANIMATED TEXT 

function updateTexts(){


  document.getElementById("contact_me_h1").innerHTML = contact_me_h1;
  console.log("InnerHTML- Contact me")

// Showing Text
const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};


if (serbian_language === "SELECTED") {
  texts = [
    "STVORI",
    "SVOJU",
    "BUDUCNOST "
  ];
} else {
  texts = [
    "CREATE",
    "YOUR",
    "DESTINY "
  ];
}


const morphTime = 1;
const cooldownTime = 0.25;
let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;
elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];
function doMorph() {
  morph -= cooldown;
  cooldown = 0;
  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }
  setMorph(fraction);
}
function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}
function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}
function animate() {
  requestAnimationFrame(animate);
  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;
  cooldown -= dt;
  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }
      doMorph();
  } else {
      doCooldown();
  }
}
animate();

}


// ------------------------------------------------------

// NavBar - Hamburger Menu
const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");
menu.addEventListener("click", () => {
  // The navigation.children.length means the following :-
  // The children inside a parent are basically an array of elements; So, here I'm finding the length of the array aka how many children are inside the nav bar.
  //   Yup That's all.
  navigation.style.setProperty("--childenNumber", navigation.children.length);

  //    Casually Toggling Classes to make them animate on click
  //   Regular stuff ;)
  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});





function loadf(){
  setTimeout(newf, 1000);
  console.log("loaded")
}
function newf(){
  document.getElementById("language_select").style.visibility = "visible";
  document.getElementById("loader").classList.add("loader_fade");
  setTimeout(removeee, 2000);
  
}
function removeee() {
  document.getElementById("loader").style.display = "none";
}



function remove_all() {
  console.log("removing")
  document.getElementById("bg_video_language_select").style.display = "none";
  document.getElementById("language_select").style.display = "none";
}


