import React, { Component } from 'react';
import Button from './button';

class BookMarker extends Component {
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
        <a href="https://github.com/elamahpla/bookmark" target="_blank">
          <img
            src="https://i.imgur.com/68rGeRA.png" 
            alt="Joey Robinson Bookmarker"
          />
        </a>
        <br/>
        <Button
          className="Button-Bookmarker"
          onClick={this.handleToggleVisibility}
        >
            {this.state.visibility ? <p>Thoughts:</p> : <p>Bookmarker:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>
              This is a simple Bookmarking app with Vanilla JS. Uses localStorage to save your bookmarks.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default BookMarker;