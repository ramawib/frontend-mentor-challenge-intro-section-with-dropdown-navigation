// ! Script for desktop menu interactivity !
const featuresMenu = document.getElementById("features");
const companyMenu = document.getElementById("company");
const dropDown1 = document.querySelector(".dropdown1");
const dropDown2 = document.querySelector(".dropdown2");
const arrow = document.getElementsByClassName("arrowImg");

// *Features Menu Drop Down*
// ? Display Listener ?
featuresMenu.addEventListener("mouseover", function () {
  dropDown1.style.display = "flex";
  arrow[0].src = "images/icon-arrow-up.svg";
});
dropDown1.addEventListener("mouseover", function () {
  dropDown1.style.display = "flex";
  arrow[0].src = "images/icon-arrow-up.svg";
});

// ? Change Arrow Icon Listener ?
featuresMenu.addEventListener("mouseout", function () {
  dropDown1.style.display = "none";
  arrow[0].src = "images/icon-arrow-down.svg";
});
dropDown1.addEventListener("mouseout", function () {
  dropDown1.style.display = "none";
  arrow[1].src = "images/icon-arrow-down.svg";
});

// *Company Menu Drop Down*
// ? Display Listener ?
companyMenu.addEventListener("mouseover", function () {
  dropDown2.style.display = "flex";
  arrow[1].src = "images/icon-arrow-up.svg";
});
dropDown2.addEventListener("mouseover", function () {
  dropDown2.style.display = "flex";
});

// ? Change Icon Listener ?
companyMenu.addEventListener("mouseout", function () {
  dropDown2.style.display = "none";
  arrow[1].src = "images/icon-arrow-down.svg";
});
dropDown2.addEventListener("mouseout", function () {
  dropDown2.style.display = "none";
});

// ! Change hero image based on media query !
// TODO Need to fix auto change without reloading TODO
var heroImg = document.querySelector(".heroImg");
var mediaQuery = window.matchMedia("(max-width: 570px)");
if (mediaQuery.matches) {
  // window width is at less than 570px
  heroImg.src = "images/image-hero-mobile.png";
} else {
  heroImg.src = "images/image-hero-desktop.png"; // window width is greater than 570px
}

// ! Function to open and close mobile menu onclick !
const shadow = document.querySelector(".mobileMenuShadow");

function closeMenu() {
  shadow.style.display = "none";
  document.querySelector(".sideMenu").style.display = "none";
}

function openMenu() {
  shadow.style.display = "block";
  document.querySelector(".sideMenu").style.display = "flex";
}

// ! Function to change mobile 'Features' menu arrow icon and display dropdown onclick !
const mobileFeaturesArrow = document.getElementById("mobileFeaturesArrow");

function featuresDropDown() {
  const mobileFeatures = document.querySelectorAll(".mobileFeaturesDropDown");
  for (let i = 0; i < mobileFeatures.length; i++) {
    if (mobileFeatures[i].style.display == "flex") {
      mobileFeatures[i].style.display = "none";
      mobileFeaturesArrow.src = "./images/icon-arrow-down.svg";
    } else {
      mobileFeatures[i].style.display = "flex";
      mobileFeaturesArrow.src = "./images/icon-arrow-up.svg";
    }
  }
}

// ! Function to change mobile 'Company' menu arrow icon and display dropdown onclick !
const mobileCompany = document.querySelectorAll(".mobileCompanyDropDown");
const mobileCompanyArrow = document.getElementById("mobileCompanyArrow");

function companyDropDown() {
  for (let i = 0; i < mobileCompany.length; i++) {
    if (mobileCompany[i].style.display == "flex") {
      mobileCompany[i].style.display = "none";
      mobileCompanyArrow.src = "./images/icon-arrow-down.svg";
    } else {
      mobileCompany[i].style.display = "flex";
      mobileCompanyArrow.src = "./images/icon-arrow-up.svg";
    }
  }
}
