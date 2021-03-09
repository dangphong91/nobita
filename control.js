let nob = document.getElementById("img");
nob.style.width = "100px";
nob.style.height = "200px";
nob.style.position = "relative";
nob.style.left = "0px";
nob.style.top = "0px";
let step = 2;
let width = window.innerWidth;
let height = window.innerHeight;
function move(evt) {
    switch (evt.keyCode) {
        case 37:
            nob.src = "images/right.gif";
            if (nob.style.left >= "0px") {
                nob.style.left = `${parseInt(nob.style.left) - step}px`;
            }
        break;
        case 39:
            nob.src = "images/right.gif";
            nob.style.left = `${parseInt(nob.style.left) + step}px`;
        break;
        case 38:
            nob.src = "images/right.gif";
            if (nob.style.top >= "0px") {
                nob.style.top = `${parseInt(nob.style.top) - step}px`;
            }
        break;
        case 40:
            nob.src = "images/right.gif";
            nob.style.top = `${parseInt(nob.style.top) + step}px`;
        break;
    }
}
window.addEventListener("keydown", move);