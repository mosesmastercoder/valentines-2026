let noClickCount = 0;

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const inlineSurpriseBtn = document.getElementById("inlineSurpriseBtn");
const initialState = document.getElementById("initialState");
const videoState = document.getElementById("videoState");
const noClicksMessage = document.getElementById("noClicksMessage");
const themeBtns = document.querySelectorAll(".theme-btn");
const landingState = document.getElementById("landingState");
const landingNoBtn = document.getElementById("landingNoBtn");
const landingYesBtn = document.getElementById("landingYesBtn");

themeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    setTheme(this.getAttribute("data-theme"));
  });
});

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-theme") === theme);
  });
  localStorage.setItem("valentineTheme", theme);
}

function loadTheme() {
  setTheme(localStorage.getItem("valentineTheme") || "brown");
}

function handleLandingNoClick() {
  noClickCount++;
  landingNoBtn.classList.remove("wag");
  void landingNoBtn.offsetWidth;
  landingNoBtn.classList.add("wag");
  setTimeout(() => {
    landingNoBtn.classList.remove("wag");
  }, 400);
}

function handleLandingYesClick() {
  const landingNoCount = noClickCount;
  landingState.classList.add("hidden");

  setTimeout(() => {
    initialState.classList.remove("hidden");
    noClicksMessage.textContent =
      landingNoCount > 0 ? `I saw you click no ${landingNoCount} times!` : "";

    setTimeout(() => {
      envelope.classList.add("opening");
    }, 500);
  }, 300);
}

function handleSurpriseClick() {
  initialState.classList.add("hidden");

  setTimeout(() => {
    videoState.classList.remove("hidden");
    const video = document.getElementById("surpriseVideo");
    video?.play().catch(() => {});
  }, 300);
}

function initialize() {
  loadTheme();
  landingState.classList.remove("hidden");
  initialState.classList.add("hidden");
  videoState.classList.add("hidden");
  noClickCount = 0;
  envelope.classList.remove("opening");
  inlineSurpriseBtn?.addEventListener("click", handleSurpriseClick);
}

landingNoBtn.addEventListener("click", handleLandingNoClick);
landingYesBtn.addEventListener("click", handleLandingYesClick);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize);
} else {
  initialize();
}
