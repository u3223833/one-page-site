//click me 
$(document).ready(function(){
  $("#hover-area").click(function(){
    $("#reveal").slideToggle(300);
  });
});

//typewritter effect
'use strict';

function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
    );
    setInterval(() => typeWriter(el), 8000);
}

typeWriter(elementEl);
