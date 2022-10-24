//"click" to reveal image

function toggleImage() {
  var image = document.getElementById('image');
  image.classList.toggle('hidden');
}

var button = document.getElementById('button')
button.addEventListener('click', toggleImage)
