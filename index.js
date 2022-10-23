//flashlight mouse

function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.style.setProperty('--cursorX', 'calc(' + x + 'px + 9vmax)');
  document.style.setProperty('--cursorY', 'calc(' + x + 'px + 6vmax)');
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)

