import React, { Component } from 'react';
import Button from './button';

class NumberGuess extends Component {
  state = {
    visibility: false
  }
  handleToggleVisibility = () => {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <Button
          className="Button-NumberGuess"
          onClick={this.handleToggleVisibility}
        >
            {this.state.visibility ? <p>Thoughts:</p> : <p>Number Guess:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>
              Number guessing game using vanilla JS.
            </p>
            <p>
              <a href="https://github.com/Joey-Robinson/numberguess" target="_blank">
                GitHub Repo
              </a>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default NumberGuess;