const douglas = document.querySelector('.douglas')
const mark = document.querySelector('.mark')
const victor = document.querySelector('.victor')
const anousheh = document.querySelector('.anousheh')

// dotted nav selectors
document.querySelectorAll('#douglasNav').forEach(dNav => {
  dNav.addEventListener('click', function() {
    douglas.style.display = "flex"
    mark.style.display = "none"
    victor.style.display = "none"
    anousheh.style.display = "none"
  })
});

document.querySelectorAll('#markNav').forEach(mNav => {
  mNav.addEventListener('click', function() {
    douglas.style.display = "none"
    mark.style.display = "flex"
    victor.style.display = "none"
    anousheh.style.display = "none"
  })
});

document.querySelectorAll('#victorNav').forEach(vNav => {
  vNav.addEventListener('click', function() {
    douglas.style.display = "none"
    mark.style.display = "none"
    victor.style.display = "flex"
    anousheh.style.display = "none"
  })
});

document.querySelectorAll('#anoushehNav').forEach(aNav => {
  aNav.addEventListener('click', function() {
    douglas.style.display = "none"
    mark.style.display = "none"
    victor.style.display = "none"
    anousheh.style.display = "flex"
  })
});

function dottedMenu() {
  const mobile = document.querySelectorAll('.mobile')
  const desktop = document.querySelectorAll('.desktop')

  mobile.forEach(m => {
    if (window.innerWidth <= 768) {
      m.style.display = "flex"
    } else {
      m.style.display = "none"
    }
  });

  desktop.forEach(d => {
    if (window.innerWidth <= 768) {
      d.style.display = "none"
    } else {
      d.style.display = "flex"
    }
  });
}

dottedMenu()