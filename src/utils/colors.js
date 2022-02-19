// pad a hexadecimal string with zeros if it needs it
function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

// convert an integer to a 2-char hex string
// for sanity, round it and ensure it is between 0 and 255
// 43 => '2b'
function intToHex(rgbint) {
    return pad(Math.min(Math.max(Math.round(rgbint), 0), 255).toString(16), 2);
}

// convert a hex string into an object with red, green, blue numeric properties
// '501214' => { red: 80, green: 18, blue: 20 }
function hexToRGB(colorValue) {
    return {
        red: parseInt(colorValue.substr(0, 2), 16),
        green: parseInt(colorValue.substr(2, 2), 16),
        blue: parseInt(colorValue.substr(4, 2), 16),
    };
}

// convert one of our rgb color objects to a full hex color string
// { red: 80, green: 18, blue: 20 } => '501214'
function rgbToHex(rgb) {
    return intToHex(rgb.red) + intToHex(rgb.green) + intToHex(rgb.blue);
}

// shade one of our rgb color objects to a distance of i*10%
// ({ red: 80, green: 18, blue: 20 }, 1) => { red: 72, green: 16, blue: 18 }
function rgbShade(rgb, i) {
    return {
        red: rgb.red * (1 - 0.1 * i),
        green: rgb.green * (1 - 0.1 * i),
        blue: rgb.blue * (1 - 0.1 * i),
    };
}

// tint one of our rgb color objects to a distance of i*10%
// ({ red: 80, green: 18, blue: 20 }, 1) => { red: 98, green: 42, blue: 44 }
function rgbTint(rgb, i) {
    return {
        red: rgb.red + (255 - rgb.red) * i * 0.1,
        green: rgb.green + (255 - rgb.green) * i * 0.1,
        blue: rgb.blue + (255 - rgb.blue) * i * 0.1,
    };
}

function getHex(hex) {
    return hex.match(/\b[0-9A-Fa-f]{3}\b|[0-9A-Fa-f]{6}\b/)[0];
}

function calculate(colorValue, shadeOrTint, amount) {
    let color = hexToRGB(colorValue);
    return rgbToHex(shadeOrTint(color, amount / 10));
}

/* export function tint(color, amount, addHashtag = true) {
    return (addHashtag ? '#' : '') + calculate(color, rgbTint, amount);
}

export function shade(color, amount, addHashtag = true) {
    return (addHashtag ? '#' : '') + calculate(color, rgbShade, amount);
} */

export function alpha(color, opacity) {
    let rgb = hexToRGB(getHex(color));
    return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${opacity})`;
}

export function adjust(color, amount, addHashtag = true) {
    color = getHex(color);
    return (addHashtag ? '#' : '') + (amount == 0 ? color : calculate(color, amount < 0 ? rgbShade : rgbTint, Math.abs(amount)));
}
