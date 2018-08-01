import React from 'react'
import JR from '../components/jr';
import SSC from '../components/ssc';
import STC from '../components/stc';
import BookMarker from '../components/bookmarker';
import CalorieCounter from '../components/caloriecounter';
import FilterableList from '../components/filterablelist';
import GitHubSearch from '../components/githubsearch';
import ImageGallery from '../components/imagegallery';
import ImageSlider from '../components/imageslider';
import ReusableButton from '../components/reusablebutton';
import Modal from '../components/modal/Modal';
import MenuContainer from '../components/sidebar/MenuContainer';
import Todo from '../components/Todo/Todo';
import VisibilityToggle from '../components/visibilitytoggle';
import WeightConverter from '../components/weightconverter';
import DnD from '../components/dndjs';
import RedditSearch from '../components/redditsearch';
import RatingSystem from '../components/ratingsystem';
import FullCrud from '../components/fullcrud';

const Portfolio = () => (
  <div className="Portfolio">
    <div className="Portfolio-Header">
      <h1>Websites</h1>
    </div>
    <div className="Portfolio-JSHeader">
      <h1>JavaScript</h1>
    </div>
    <div className="Portfolio-ReactHeader">
      <h1>React</h1>
    </div>
    <div className="Portfolio-Website">
      <JR />
      <br/>
      <SSC />
      <br/>
      <STC />
    </div>
    <div className="Portfolio-JavaScript">
      <BookMarker />
      <br/>
      <CalorieCounter />
      <br/>
      <FilterableList />
      <br/>
      <GitHubSearch />
      <br/>
      <ImageGallery />
      <br/>
      <ImageSlider />
      <br/>
      <DnD />
      <br/>
      <RedditSearch />
      <br/>
      <RatingSystem />
      <br/>
      <FullCrud />
    </div>
    <div className="Portfolio-Reusable">
      <ReusableButton />
      <br/>
      <Modal />
      <br/>
      <MenuContainer />
      <br/>
      <Todo />
      <br/>
      <VisibilityToggle />
      <br/>
      <WeightConverter />
      <br/>
    </div>
  </div>
)

export default Portfolio