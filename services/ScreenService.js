'use strict';

import robot from 'robotjs';

import ColorConverter from '../converters/ColorConverter';

function getColor(colors, key) {
  return parseInt(
    colors.reduce((previous, current) => {
      return previous + current[key];
    }, 0) / colors.length);
}

const ScreenService = {

  screenSize: robot.getScreenSize(),

  getAverageColor(image) {
    let colors = [];
    for (var i = 50; i < this.screenSize.width; i += 50) {
      colors.push(ColorConverter.hexToRgb(image.colorAt(i, 0)));
    }
    let newColor = {
      r: getColor(colors, 'r'),
      g: getColor(colors, 'g'),
      b: getColor(colors, 'b')
    };
    return newColor;
  },

  getScreen() {
    return robot.screen.capture(0, this.screenSize.height - 100, this.screenSize.width, 100);
  },

  getNextColor() {
    return ColorConverter.rgbToCie(this.getAverageColor(this.getScreen()));
  }
};

export default ScreenService;
