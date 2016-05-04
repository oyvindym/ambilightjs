'use strict';

import HueService from './services/HueService';

function run() {
  HueService.run();
}

setInterval(run, 500);
