// variables
const menuBtn = document.querySelector("#menu")
const smallNav = document.querySelector(".small-screen")
// menu class toggle
menuBtn.addEventListener("click", () => {
  smallNav.classList.toggle("show-nav")
  document.body.classList.toggle("stop-scroll")
})

// scroll reveal
const users = document.querySelectorAll(".users")
const headers = document.querySelectorAll(".headers")
const icons = document.querySelectorAll(".icons")
// ScrollReveal({ mobile: false })

const slide = {
  distance: "100%",
  desktop: false,
}
// mobile screen users
users.forEach((user, index) => {
  if (index % 2 === 0) {
    ScrollReveal().reveal(user, { ...slide, origin: "right" })
  } else {
    ScrollReveal().reveal(user, { ...slide, origin: "left" })
  }
})
// social icons
scrollreveal(icons, "top", 100, true)
// headers
scrollreveal(headers, "top", 50, true)
// desktop screen users
scrollreveal(users, "left", 100, false)
// scrollreveal function
function scrollreveal(selection, origin, delay = 0, mobile) {
  selection.forEach((sel, index) => {
    delay += index * 75
    ScrollReveal().reveal(sel, {
      origin: origin,
      delay: delay,
      distance: "100%",
      mobile: mobile,
    })
  })
}
