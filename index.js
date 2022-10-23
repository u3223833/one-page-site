//typewritter effect

var i = 0;
var txt = 'Nothing beats a good ghost story. Behind their facades hides a skeleton—or two. The creek of a floorboard or the flicker of a light is just the beginning of the frightening tales these locations have to tell. If you are a fiend for chilling stories that send goosebumps up your arm you are in the right place'; /* The text */

var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
