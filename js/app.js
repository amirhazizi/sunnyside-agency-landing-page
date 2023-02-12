const menuBtn = document.querySelector("#menu")
const smallNav = document.querySelector(".small-screen")
menuBtn.addEventListener("click", () => {
  smallNav.classList.toggle("show-nav")
  document.body.classList.toggle("stop-scroll")
})
