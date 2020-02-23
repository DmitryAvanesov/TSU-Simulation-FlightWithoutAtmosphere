'use strict'

class Parameters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='parameters'>
        <div class='parameters-block'>
          <div class='parameters-name'>Speed</div>
          <input
            type='number'
            id='input-speed'
            defaultValue={this.props.initialSpeed}
            onChange={this.props.callbackChange}
          >
          </input>
        </div>

        <div class='parameters-block'>
          <div class='parameters-name'>Height</div>
          <input
            type='number'
            id='input-height'
            defaultValue={this.props.initialHeight}
            onChange={() => { this.props.callbackChange() }}
          >
          </input>
        </div>

        <div class='parameters-block'>
          <div class='parameters-name'>Angle</div>
          <input
            type='number'
            id='input-angle'
            defaultValue={this.props.initialAngle}
            onChange={this.props.callbackChange}
          >
          </input>
        </div>

      </div>
    );
  }
}