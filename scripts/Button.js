'use strict'

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='button'>
        {this.props.symbol}
      </div>
    );
  }
}