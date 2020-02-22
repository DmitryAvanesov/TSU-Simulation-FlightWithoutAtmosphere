'use strict';

class SimulationModel {
  constructor() {
    this.time = 0;
    this.timeIncreasingInterval = 1000;

    this.initialSpeed = 10;
    this.initialHeight = 0;
    this.initialAngle = 45;

    this.speed = this.initialSpeed;
    this.height = this.initialHeight;
    this.angle = this.initialAngle;
  }

  increaseTime() {
    this.time++;


  }
}