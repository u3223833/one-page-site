/* The first one is an array that contains a string with the message we want to display. 
The second indicates the text position of the string, you’ll see what this does in a moment. 
The third variable holds the speed of the typewriter effect in milliseconds.*/

var messageArray = ["Whether you’re a believer, a skeptic, or flat-out think they’re a myth, ghost stories and sightings have perpetuated popular culture for millennia, and some of them are downright spooky."
"Many people who are interested in paranormal – or just plain creepy experiences – will usually venture out of their way to find places that are haunted. Canberra, however, has a rich hidden history, and with that comes the paranormal."
"Most born and raised Canberrans would know there are several places in the nation’s capital that are renowned for being haunted, with many locals alleging sightings and recounting the same experiences."
"If your a fien for scary stories you are in the right place. Take a look at my collection of the most haunted places in Canberra that will give you goosebumps."];
var textPosition = 0; 
var speed = 100;

/* the function that creates the typewriter effect. We access the p element from the HTML file and set its innerHTML equal to the first index of the array and the span holding the blinker. 
We also attach the built in substring(0, textPosition) function to the array.*/

typewriter = () => {
  document.querySelector("#message").innerHTML = quoteArray[0].substring(0, textPosition) + '<span>\u25AE</span>';

  if(textPosition++ != messageArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter)
