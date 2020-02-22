'use strict';

class ChartModel {
  constructor() {
    this.data = [];
    this.accDueToGr = 9.80665;
    this.maxX = 0;
    this.maxY = 0;
  }

  setMaxAxis(speed, height, angle) {
    const angleRad = angle * Math.PI / 180;

    this.maxX = Math.pow(speed, 2) * Math.sin(2 * angleRad) / this.accDueToGr;
    this.maxY = height + Math.pow(speed, 2) * Math.pow(Math.sin(angleRad), 2) / (2 * this.accDueToGr);
  }

  setFirstPoint(height) {
    this.data.push({
      x: 0,
      y: height
    });
  }

  increaseTime(speed, height, angle, time) {
    const timeSec = time / 1000;
    const angleRad = angle * Math.PI / 180;

    const newX = speed * Math.cos(angleRad) * timeSec;
    const newY = height + speed * Math.sin(angleRad) * timeSec - this.accDueToGr * Math.pow(timeSec, 2) / 2;

    this.data.push({
      x: newX.toFixed(2),
      y: newY.toFixed(2)
    });
  }
}