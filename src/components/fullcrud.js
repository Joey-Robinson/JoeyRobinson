import React, { Component } from 'react';
import Button from './button';

class FullCrud extends Component {
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
          className="Button-FullCrud"
          onClick={this.handleToggleVisibility}
        >
            {this.state.visibility ? <p>Thoughts:</p> : <p>Full CRUD:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>
              A full crud app using vanilla JS. You'll (probably) need to npm install. 
            </p>
            <p>
              <a href="https://github.com/Joey-Robinson/AngerCRUD" target="_blank">
                GitHub Repo
              </a>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default FullCrud;