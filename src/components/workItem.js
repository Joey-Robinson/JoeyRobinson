import React from 'react'

const WorkItem = (({ image, title, date, tech, goal, link }) => (
  <section className='workitem'>
    <div className='workitem__content'>
      <div className="workitem__content-image"><img src={image} alt={title} /></div>
      <div className="workitem__content-primary">
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
      <div className="workitem__content-secondary">
        <h2 className='workitem__subtitle'>Technology</h2>
        <p>{tech}</p>
      </div>
      <div className="workitem__content-goal">
        <h2 className='workitem__subtitle'>Goal</h2>
        <p>{goal}</p>
        <a className='workitem__link' href={link} target='_blank' rel="noopener">Check it out</a>
      </div>
    </div>
  </section>
));

export default WorkItem