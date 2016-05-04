'use strict';

function hexTable(hex) {
  switch (hex) {
    case '0': return 0;
    case '1': return 1;
    case '2': return 2;
    case '3': return 3;
    case '4': return 4;
    case '5': return 5;
    case '6': return 6;
    case '7': return 7;
    case '8': return 8;
    case '9': return 9;
    case 'a': return 10;
    case 'b': return 11;
    case 'c': return 12;
    case 'd': return 13;
    case 'e': return 14;
    case 'f': return 15;
  }
}

function hexToDecimal(hex) {
  return hexTable(hex[0]) * 16 + hexTable(hex[1]) * 1;
}

function calculateHue(r, g, b, min, max) {
  if (r > g && r > b) {
    return (g - b) / (max - min);
  } else if (g > r && g > b) {
    return 2.0 + ((b - r) / (max - min));
  } else {
    return (4.0 + ((r - g) / (max - min)));
  }
}

const ColorConverter = {

  hexToRgb(hex) {
    return {
      r: hexToDecimal(`${hex[0]}${hex[1]}`),
      g: hexToDecimal(`${hex[2]}${hex[3]}`),
      b: hexToDecimal(`${hex[4]}${hex[5]}`)
    };
  },

  rgbToCie(rgb) {
    let x = 0.4124 * rgb.r + 0.3576 * rgb.g + 0.1805 * rgb.b;
    let y = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
    let z = 0.0193 * rgb.r + 0.1192 * rgb.g + 0.9505 * rgb.b;

    return [
      x / (x + y + z),
      y / (x + y + z)
    ];
  }
};

export default ColorConverter;
