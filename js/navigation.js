const hamburger = document.querySelector('#hamburger')
const close = document.querySelector('#close')
const mobileNav = document.querySelector('#mobile_ul_nav')

// Open Nav
hamburger.addEventListener('click', function() {
  mobileNav.style.display = "block"
  hamburger.style.display = "none"
  close.style.display = "block"
})

// Close Nav
close.addEventListener('click', () => {
  mobileNav.style.display = "none"
  close.style.display = "none"
  hamburger.style.display = "block"
})