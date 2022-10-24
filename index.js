/*flashlight effect*/

let flashlight = document.getElementById("flashlight");
function update(e) {
let mouseX = 0;
let mouseY = 0;


  flashlight.style.setProperty("--Xpos", mouseX + "px");
  flashlight.style.setProperty("--Ypos", mouseY + "px");
}

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);

document.addEventListener('mousemove', update)
document.addEventListener('touchmove', update)

/*mouse click*/

var evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: 20,
      }),
      ele = document.getElementById("btn");
    ele.dispatchEvent(evt);
