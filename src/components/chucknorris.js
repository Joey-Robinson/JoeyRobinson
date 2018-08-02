import React, { Component } from 'react';
import Button from './button';

class Chucky extends Component {
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
          className="Button-Chucky"
          onClick={this.handleToggleVisibility}
        >
            {this.state.visibility ? <p>Thoughts:</p> : <p>Chuck Norris:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>
              Chuck Norris Jokes. Using the Chuck Norris Joke API. 
            </p>
            <p>
              <a href="https://github.com/Joey-Robinson/ChuckNorrisJokes" target="_blank">
                GitHub Repo
              </a>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Chucky;