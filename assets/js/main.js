let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");

rightBtn.addEventListener("click", function () {
  let active = document.querySelectorAll(".active");
  if (active[3].nextElementSibling != null) {
      leftBtn.classList.remove("disabled")
      active[0].classList.remove("active");
      active[3].nextElementSibling.classList.add("active");
    //   for (let i = 0; i < active.length; i++) {
    //       active[i].style.transform = "translateX(-200px)"
    //   }
  } else {
    rightBtn.classList.add("disabled")
  } 
});
leftBtn.addEventListener("click", function () {
  let active = document.querySelectorAll(".active");

  if (active[0].previousElementSibling != null) {
    rightBtn.classList.remove("disabled")
    active[3].classList.remove("active");
    active[0].previousElementSibling.classList.add("active");
    // for (let i = 0; i < active.length; i++) {
    //     active[i].style.transform = "translateX(200px)"
    // }
  } else {
    leftBtn.classList.add("disabled")
  }
});
