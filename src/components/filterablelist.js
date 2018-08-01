import React, { Component } from 'react';
import Button from './button';

class FilterableList extends Component {
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
          className="Button-Filterable"
          onClick={this.handleToggleVisibility}
        >
            {this.state.visibility ? <p>Thoughts:</p> : <p>Filterable List:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>
              Filterable contact list. Uses inline JS. No localStorage
            </p>
            <p>
            <a href="https://github.com/elamahpla/FilterableList" target="_blank">
              GitHub Repo
            </a>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default FilterableList;