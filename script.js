// Google Form registration
// Replace the placeholder with your real Google Form URL.
const GOOGLE_FORM_URL = "PASTE_YOUR_GOOGLE_FORM_LINK_HERE";

function openRegistration(event){
  event.preventDefault();
  if(GOOGLE_FORM_URL.includes("PASTE_YOUR")){
    alert("Please add your Google Form link in script.js first.");
    return;
  }
  window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
}
document.querySelectorAll(".register").forEach(x => x.addEventListener("click", openRegistration));

const intro = document.getElementById("intro");
const site = document.getElementById("site");
const skip = document.getElementById("skipIntro");

function enterSite(){
  if(intro.classList.contains("exit")) return;
  intro.classList.add("exit");
  site.classList.add("visible");
  setTimeout(() => intro.remove(), 1050);
}
skip.addEventListener("click", enterSite);

// Automatic cinematic intro -> website
setTimeout(enterSite, 5200);

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
