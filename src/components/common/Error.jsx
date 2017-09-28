import React from 'react';

export default class Error extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <strong>Oooooooops!</strong>
        &nbsp;
        <s>{this.props.location.pathname}</s>
      </div>
    );
  }
}
