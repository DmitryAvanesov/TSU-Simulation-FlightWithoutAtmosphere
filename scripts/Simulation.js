'use strict';

class Simulation extends React.Component {
  constructor(props) {
    super(props);
    this.model = new SimulationModel();

    this.parameters = this.renderParameters();
    this.isRunning = false;
    this.symbolPlay = '>';
    this.symbolPause = '||';

    this.state = {
      chart: this.renderChart(),
      timer: this.renderTimer(),
      button: this.renderButton()
    };

    this.timeIncreasingFunction = undefined;
  }

  render() {
    return (
      <div>
        {this.state.chart}
        <div class='info'>
          {this.parameters}
          {this.state.timer}
          {this.state.button}
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

  renderButton() {
    if (this.isRunning) {
      return (
        <Button
          symbol={this.symbolPause}
          callbackPress={this.handleButtonPress.bind(this)}
        />
      );
    }

    return (
      <Button
        symbol={this.symbolPlay}
        callbackPress={this.handleButtonPress.bind(this)}
      />
    );
  }

  handleParametersChange() {
    if (event.target.id === 'input-speed') {
      this.model.speed = parseInt(event.target.value);
    }
    else if (event.target.id === 'input-height') {
      this.model.height = parseInt(event.target.value);
    }
    else {
      this.model.angle = parseInt(event.target.value);
    }

    this.setState({
      chart: this.renderChart()
    });
  }

  handleFinish() {
    clearInterval(this.timeIncreasingFunction);
    this.model.time = 0;
    this.isRunning = false;

    this.setState({ button: this.renderButton() });
  }

  handleButtonPress() {
    this.isRunning = !this.isRunning;

    this.setState({ 
      chart: this.renderChart(),
      button: this.renderButton()
    });

    if (this.isRunning) {
      this.timeIncreasingFunction = setInterval(() => {
        this.model.time += this.model.timeIncreasingInterval;
  
        this.setState({
          chart: this.renderChart(),
          timer: this.renderTimer()
        });
      }, this.model.timeIncreasingInterval);
    }
    else {
      clearInterval(this.timeIncreasingFunction);
      this.setState({ button: this.renderButton() });
    }
  }
}