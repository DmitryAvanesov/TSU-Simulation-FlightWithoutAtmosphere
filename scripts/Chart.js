'use strict';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.model = new ChartModel();

    this.state = {
      data: this.model.data
    };

    this.chartWidth = 900;
    this.chartHeight = 600;
    this.axisExtensionCoef = 1.1;

    this.model.setMaxAxis(this.props.speed, this.props.height, this.props.angle);
    this.model.setFirstPoint(props.height);

    this.timeIncreasingFunction = setInterval(() => {
      this.model.increaseTime(
        this.props.speed,
        this.props.height,
        this.props.angle
      );

      this.setState({
        data: this.model.data
      });

      if (this.model.data[this.model.data.length - 1].y <= 0) {
        clearInterval(this.timeIncreasingFunction);
      }
    }, this.model.timeIncreasingInterval);
  }

  render() {
    return (
      <window.Recharts.LineChart
        width={this.chartWidth}
        height={this.chartHeight}
        data={this.state.data.slice()}
      >
        <window.RechartsCartesianGrid />
        <window.Recharts.XAxis
          dataKey='x'
          type='number'
          domain={[0, this.model.maxX * this.axisExtensionCoef]}
        />
        <window.Recharts.YAxis
          dataKey='y'
          type='number'
          domain={[0, this.model.maxY * this.axisExtensionCoef]}
        />
        <window.Recharts.Line
          type='monotone'
          dataKey='y'
          stroke='black'
          dot={false}
        />
      </window.Recharts.LineChart>
    );
  }
}