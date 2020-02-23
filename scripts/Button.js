'use strict'

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        class='button'
        onClick={this.props.callbackPress}
      >
        {this.props.symbol}
      </div>
    );
  }
}