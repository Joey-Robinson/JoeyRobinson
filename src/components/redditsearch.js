import React, { Component } from 'react';
import Button from './button';

class RedditSearch extends Component {
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
          className="Button-RedditSearch"
          onClick={this.handleToggleVisibility}
        >
            {this.state.visibility ? <p>Thoughts:</p> : <p>Reddit Search:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>
             A reddit search using vanilla JS. 
            </p>
            <p>
            <a href="https://github.com/Joey-Robinson/RedditSearchJS" target="_blank">
              GitHub Repo
            </a>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default RedditSearch;