'use strict';

class Simulation extends React.Component {
  constructor(props) {
    super(props);
    this.model = new SimulationModel();

    this.state = {
      chart: this.createChart()
    };

    this.timeIncreasingFunction = setInterval(() => {
      this.model.increaseTime();
    }, this.model.timeIncreasingInterval);

    this.handleParametersChange = this.handleParametersChange.bind(this);
  }

  render() {
    return (
      <div>
        {this.state.chart}

        <Parameters
          initialSpeed={this.model.initialSpeed}
          initialHeight={this.model.initialHeight}
          initialAngle={this.model.initialAngle}
          callback={this.handleParametersChange}
        />
      </div>
    );
  }

  createChart() {
    return (
      <Chart
        speed={this.model.initialSpeed}
        height={this.model.initialHeight}
        angle={this.model.initialAngle}
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
      chart: <Chart
        speed={this.model.speed}
        height={this.model.height}
        angle={this.model.angle}
      />
    });
  }
}