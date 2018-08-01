import React, { Component } from 'react';
import Button from './button';

class RatingSystem extends Component {
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
          className="Button-RatingSystem"
          onClick={this.handleToggleVisibility}
        >
            {this.state.visibility ? <p>Thoughts:</p> : <p>Rating System:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>
              A rating system using vanilla JS. What I like about this is that it's less than 40 lines of JS but still incredibly cool.
            </p>
            <p>
              <a href="https://github.com/Joey-Robinson/RatingSystem" target="_blank">
                GitHub Repo
              </a>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default RatingSystem;