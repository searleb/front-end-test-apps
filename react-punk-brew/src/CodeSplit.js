import React, { Component } from 'react';

class CodeSplit extends Component {
  state = {
    SomeContent: null,
  }

  handleClick = () => {
    import('./SomeContent')
      .then(SomeContent => {
        this.setState({ SomeContent: SomeContent })
      })
      .catch(err => {
        // Handle failure
        console.error(err);
      });
  };

  render() {
    return (
      <div>
        {this.state.SomeContent ? <this.state.SomeContent.default /> : 'not loaded'}
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default CodeSplit;
