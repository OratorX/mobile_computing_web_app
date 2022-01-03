function rollColors() {
    addColorFirst(getRandomColor());
    addColorSecond(getRandomColor());
    addColorThird(getRandomColor());
}


function addColorFirst(color) {
    changeBackgroundColorById("color_1", color);
    setTextById("color_1", color);
    changeTextColorById("color_1", contrastingColor(color.substring(1)));

}

function addColorSecond(color) {
    changeBackgroundColorById("color_2", color);
    setTextById("color_2", color);
    changeTextColorById("color_2", contrastingColor(color.substring(1)));
}

function addColorThird(color) {
    changeBackgroundColorById("color_3", color);
    setTextById("color_3", color);
    changeTextColorById("color_3", contrastingColor(color.substring(1)));
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

function contrastingColor(color) {
    return (luma(color) >= 165) ? '#000' : '#fff';
}

function luma(color) // color can be a hx string or an array of RGB values 0-255
{
    var rgb = (typeof color === 'string') ? hexToRGBArray(color) : color;
    return (0.2126 * rgb[0]) + (0.7152 * rgb[1]) + (0.0722 * rgb[2]); // SMPTE C, Rec. 709 weightings
}

function hexToRGBArray(color) {
    if (color.length === 3)
        color = color.charAt(0) + color.charAt(0) + color.charAt(1) + color.charAt(1) + color.charAt(2) + color.charAt(2);
    else if (color.length !== 6)
        throw('Invalid hex color: ' + color);
    var rgb = [];
    for (var i = 0; i <= 2; i++)
        rgb[i] = parseInt(color.substr(i * 2, 2), 16);
    return rgb;
}