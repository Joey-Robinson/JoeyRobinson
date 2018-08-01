import React, { Component } from 'react';
import Button from './button';

class ImageSlider extends Component {
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
        <a 
          href="https://github.com/elamahpla/ImageSlider" 
          target="_blank" 
        >
          <img
            src="https://i.imgur.com/IBuOBxp.jpg" 
            alt="Joey Robinson Image Slider"
          />
        </a>
        <br/>
        <Button
          className="Button-Slider"
          onClick={this.handleToggleVisibility}
        >
            {this.state.visibility ? <p>Thoughts:</p> : <p>Image Slider:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>
              Full screen image slider
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default ImageSlider;