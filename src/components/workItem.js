import React from 'react'

const WorkItem = (({ image, title, date, tech, goal, link }) => (
  <section className='workitem'>
    <img src={image} alt={title} />
    <div className='workitem__content'>
      <h1>{title}</h1>
      <p>{date}</p>
      <h2 className='workitem__subtitle'>Technology</h2>
      <p>{tech}</p>
      <h2 className='workitem__subtitle'>Goal</h2>
      <p>{goal}</p>
      <a className='workitem__link' href={link} target='_blank' rel="noopener">Check it out</a>
    </div>
  </section>
));

export default WorkItem