const launch = document.querySelector('.launch_vehicle')
const port = document.querySelector('.spaceport')
const capsule = document.querySelector('.space_capsule')

// clickable nav
document.querySelectorAll('#launchNav').forEach(lNav => {
  lNav.addEventListener('click', function() {
    launch.style.display = "flex"
    port.style.display = "none"
    capsule.style.display = "none"
  })
});

document.querySelectorAll('#portNav').forEach(pNav => {
  pNav.addEventListener('click', function() {
    launch.style.display = "none"
    port.style.display = "flex"
    capsule.style.display = "none"
  })
});

document.querySelectorAll('#capsuleNav').forEach(cNav => {
  cNav.addEventListener('click', function() {
    launch.style.display = "none"
    port.style.display = "none"
    capsule.style.display = "flex"
  })
});