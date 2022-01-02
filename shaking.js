function makeHintVisible() {
    document.getElementById("shaking_hint").style.display = "block";
}

function makeHintInvisible() {
    document.getElementById("shaking_hint").style.display = "none";
}

var gyroPresent = false;
window.addEventListener("devicemotion", function (event) {
    if (event.rotationRate.alpha || event.rotationRate.beta || event.rotationRate.gamma)
        gyroPresent = true;
});

gyroPresent = true;
if (gyroPresent) {
    makeHintVisible();
} else {
    makeHintInvisible();
}

