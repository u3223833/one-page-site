/* typing effect for opening paragraph */

var i = 0;
var txt = 'Whether you’re a believer, a skeptic, or flat-out think they’re a myth, ghost stories and "sightings" have perpetuated popular culture for millennia, and some of them are downright spooky. 
Many people who are interested in paranormal – or just plain creepy experiences – will usually venture out of their way to find places that are haunted. Canberra, however, has a rich hidden history, and with that comes the paranormal. 
Most born and raised Canberrans would know there are several places in the nation’s capital that are renowned for being haunted, with many locals alleging sightings and recounting the same experiences. 
If your a fien for scary stories you are in the right place. Take a look at my collection of the "most haunted places" in Canberra that will give you goosebumps.'; /* The text */

var speed = 50; /* The speed/duration of the effect */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
