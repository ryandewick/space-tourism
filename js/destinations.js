const moon = document.querySelector('.destination_moon')
const mars = document.querySelector('.destination_mars')
const europa = document.querySelector('.destination_europa')
const titan = document.querySelector('.destination_titan')

// Destination Page secondary nav selectors
document.querySelectorAll('#moon_selector').forEach(moonSel => {
  moonSel.addEventListener('click', function() {
    moon.style.display = "flex"
    mars.style.display = "none"
    europa.style.display = "none"
    titan.style.display = "none"
  })
});

document.querySelectorAll('#mars_selector').forEach(marsSel => {
  marsSel.addEventListener('click', function() {
    moon.style.display = "none"
    mars.style.display = "flex"
    europa.style.display = "none"
    titan.style.display = "none"
  })
});

document.querySelectorAll('#europa_selector').forEach(europaSel => {
  europaSel.addEventListener('click', function() {
    moon.style.display = "none"
    mars.style.display = "none"
    europa.style.display = "flex"
    titan.style.display = "none"
  })
});

document.querySelectorAll('#titan_selector').forEach(titanSel => {
  titanSel.addEventListener('click', function() {
    moon.style.display = "none"
    mars.style.display = "none"
    europa.style.display = "none"
    titan.style.display = "flex"
  })
});

