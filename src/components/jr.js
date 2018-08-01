import React, { Component } from 'react';

class JR extends Component {
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
        <a href="http://joeyrobinson.me/" target="_blank">
          <img
            src="https://i.imgur.com/XJjuOUd.png"
            alt="Joey Robinson Personal Site Version 1"
            className="Portfolio-Image"
          />
        </a>
        <br/>
        <button
          className="Portfolio-Button-JR"
          onClick={this.handleToggleVisibility}
        >
            {this.state.visibility ? <p>Issues:</p> : <p>Joey Robinson:</p>}
        </button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>I needed a website to highlight my abilities, so this was born. As a note, the website shown in the above picture
              isn't the current iteration Instead, you'll need to go to my&nbsp; 
                <a 
                  href="https://github.com/Joey-Robinson/JoeyRobinson.me" 
                  target="_blank"
                >
                  GitHub
                </a>
              &nbsp;and check it out.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default JR;