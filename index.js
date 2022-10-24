//intro text

console.clear();
function typingEffect(element,speed){
  let text=element.innerHTML;
  element.innerHTML="";
 var i=0;
  var timer=setInterval(function(){
    if(i<text.length){
      element.append(text.charAt(i))
      i++;
    }else{
      clearInterval(timer);
    }
  },speed)
  
}

const p1=document.querySelector('p1');
typingEffect(p1,150);


//questions 

var string = "COULD THESE SIGHTINGS BE CONNECTED TO THESE TRAGIC EVENTS? OR IS IT SIMPLY JUST AN URBAN LEGEND?";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();
