'use strict';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.model = new ChartModel();
    this.chartWidth = 800;
    this.chartHeight = 500;
  }

  render() {
    return (
      <window.Recharts.LineChart
        width={this.chartWidth}
        height={this.chartHeight}
        data={this.model.data}
      >
        <window.Recharts.Tooltip />
        <window.Recharts.XAxis
          dataKey='x' />
        <window.Recharts.YAxis
          dataKey='y' />
        <window.Recharts.Line
          type='monotone'
          dataKey='y'
          stroke='black' />
      </window.Recharts.LineChart>
    );
  }
}