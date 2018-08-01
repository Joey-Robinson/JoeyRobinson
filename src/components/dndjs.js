import React, { Component } from 'react';
import Button from './button';

class DnD extends Component {
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
          className="Button-DnD"
          onClick={this.handleToggleVisibility}
        >
            {this.state.visibility ? <p>Thoughts:</p> : <p>DnD:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>
              A Drag and drop using vanilla JS. I haven't had a chance to use this just yet.
            </p>
            <p>
            <a href="https://github.com/Joey-Robinson/DnD-vJS" target="_blank">
              GitHub Repo
            </a>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default DnD;