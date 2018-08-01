import React, { Component } from 'react';
import Button from './button';

class ImageGallery extends Component {
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
          className="Button-Gallery"
          onClick={this.handleToggleVisibility}
        >
            {this.state.visibility ? <p>Thoughts:</p> : <p>Image Gallery:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>
              I made this Image Gallery for a dungeon I was a part of where knowing the location of the hidden chest is can reward you 
              with various treasures. So I made an image gallery using CSS Grid and some JS and hosted it on gh-pages. 
            </p>
            <p>
            <a href="https://github.com/elamahpla/ImageGallery" target="_blank">
              GitHub Repo
            </a>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default ImageGallery;