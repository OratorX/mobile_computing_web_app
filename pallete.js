function rollColors() {
    addColorFirst(getRandomColor());
    addColorSecond(getRandomColor());
    addColorThird(getRandomColor());
}


function addColorFirst(color) {
    changeBackgroundColorById("color_1", color);
    setTextById("color_1", color);
    changeTextColorById("color_1", invertColor(color));

}

function addColorSecond(color) {
    changeBackgroundColorById("color_2", color);
    setTextById("color_2", color);
    changeTextColorById("color_2", invertColor(color));
}

function addColorThird(color) {
    changeBackgroundColorById("color_3", color);
    setTextById("color_3", color);
    changeTextColorById("color_3", invertColor(color));
}

function changeTextColorById(id, color) {
    document.getElementById(id).style.color = color;
}

function setTextById(id, text) {
    const divToModify = document.getElementById(id);
    divToModify.innerHTML = `<span>${text}</span>`;


}

function changeBackgroundColorById(id, color) {
    document.getElementById(id).style.background = color;

}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}