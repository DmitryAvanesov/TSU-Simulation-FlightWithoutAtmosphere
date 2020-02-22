'use strict';

class SimulationModel {
  constructor() {
    this.time = 0;
    this.timeIncreasingInterval = 10;

    this.initialSpeed = 30;
    this.initialHeight = 1;
    this.initialAngle = 45;

    this.speed = this.initialSpeed;
    this.height = this.initialHeight;
    this.angle = this.initialAngle;
  }
}