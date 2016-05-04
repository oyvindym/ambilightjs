'use strict';

import request from 'superagent';

import HttpStatusCodeService from './HttpStatusCodeService';
import ScreenService from './ScreenService';

import { Bridge } from '../config';

// http://www.developers.meethue.com/documentation/core-concepts#color_gets_more_complicated

const HueService = {

  url: `http://${Bridge.ip}/api/${Bridge.username}`,

  changeLightState(light, changes) {
    return request
      .put(`${this.url}/lights/${light}/state/`)
      .send(changes);
  },

  changeLight(light, changes) {
    return request
      .put(`${this.url}/lights/${light}/`)
      .send(changes);
  },

  getLight(light) {
    return request
      .get(`${this.url}/lights/${light}/`);
  },

  displayResponse(error, response) {
    console.log('Hue API:', HttpStatusCodeService.verbose(response.status));
  },

  run() {
    let color = ScreenService.getNextColor();
    this
      .changeLightState(3, {xy: color})
      .end(this.displayResponse);
  }
};

export default HueService;
