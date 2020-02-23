'use strict';

class Simulation extends React.Component {
  constructor(props) {
    super(props);
    this.model = new SimulationModel();

    this.parameters = this.renderParameters();
    this.symbolPlay = '>';
    this.symbolPause = '||';

    this.state = {
      chart: this.renderChart(),
      timer: this.renderTimer(),
      button: this.renderButton(this.symbolPlay)
    };

    this.timeIncreasingFunction = setInterval(() => {
      this.model.time += this.model.timeIncreasingInterval;

      this.setState({
        chart: this.renderChart(),
        timer: this.renderTimer()
      });
    }, this.model.timeIncreasingInterval);
  }

  render() {
    return (
      <div>
        {this.state.chart}
        <div class='info'>
          {this.parameters}
          {this.state.timer}
        </div>
      </div>
    );
  }

  renderChart() {
    return (
      <Chart
        speed={this.model.speed}
        height={this.model.height}
        angle={this.model.angle}
        time={this.model.time}
        callbackFinish={this.handleFinish.bind(this)}
      />
    );
  }

  renderParameters() {
    return (
      <Parameters
        initialSpeed={this.model.initialSpeed}
        initialHeight={this.model.initialHeight}
        initialAngle={this.model.initialAngle}
        callbackChange={this.handleParametersChange.bind(this)}
      />
    );
  }

  renderTimer() {
    return (
      <Timer
        time={this.model.time}
      />
    );
  }

  renderButton(curSymbol) {
    return (
      <Button
        symbol={curSymbol}
        callbackPress={this.handleButtonPress.bind(this)}
      />
    );
  }

  handleParametersChange() {
    if (event.target.id === 'input-speed') {
      this.model.speed = event.target.value;
    }
    else if (event.target.id === 'input-height') {
      this.model.height = event.target.value;
    }
    else {
      this.model.angle = event.target.value;
    }

    this.setState({
      chart: this.renderChart()
    });
  }

  handleFinish() {
    clearInterval(this.timeIncreasingFunction);
  }

  handleButtonPress() {

  }
}