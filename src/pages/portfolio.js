import React from 'react'
import JR from '../components/jr';
import SSC from '../components/ssc';
import STC from '../components/stc';
import BookMarker from '../components/bookmarker';
import CalorieCounter from '../components/caloriecounter';
import FilterableList from '../components/filterablelist';

const Portfolio = () => (
  <div className="Portfolio">
    <div className="Portfolio-Header">
      <h1>Websites</h1>
    </div>
    <div className="Portfolio-JSHeader">
      <h1>JavaScript</h1>
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
    </div>
  </div>
)

export default Portfolio