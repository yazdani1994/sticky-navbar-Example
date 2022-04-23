// UserCode.ir //

window.addEventListener("scroll", () => {
  let logoImage = document.querySelector(".logo img");
  let mainNav = document.getElementById("mainNav");

  if (window.pageYOffset > 0) {
    logoImage.style.height = "64px";
    logoImage.src = "Images/atared.png";
    mainNav.classList.add("bg-black");
    mainNav.classList.add("txt-white");
  } else {
    logoImage.style.height = "84px";
    logoImage.src = "Images/atablack.png";
    mainNav.classList.remove("bg-black");
    mainNav.classList.remove("txt-white");
  }

  // console.log(window.pageYOffset, window.scrollY)
});
