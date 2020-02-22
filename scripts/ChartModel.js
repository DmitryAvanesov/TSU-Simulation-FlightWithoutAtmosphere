'use strict';

class ChartModel {
    constructor() {
        this.data = [{x: 0, y: 100}, {x: 1, y: 105}];
        this.time = 0;
        this.timeIncreasingInterval = 1000;

        this.speed;
        this.height;
        this.angle;
    }

    increaseTime() {
        this.time++;


    }
}