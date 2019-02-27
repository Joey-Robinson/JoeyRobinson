import React from 'react'

const WorkItem = (({ imagesm, imagelg, title, date, tech, goal, livelink, ghlink }) => (
  <section className='workitem'>
    <div className='workitem__content'>
      <div className="workitem__content-image">
        <a target="_blank" rel="noopener noreferrer" href={imagelg}>
          <img src={imagesm} alt={title} />
        </a>
      </div>
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
      </div>
      <div className="workitem__content-livelink">
        <h2>
          <a className='workitem__link' href={livelink} target='_blank' rel="noopener noreferrer">
            <button>
              Check out the live site
          </button>
          </a>
          <a className='workitem__link' href={ghlink} target='_blank' rel="noopener noreferrer">
            <button>
              Check Out The Repo
          </button>
          </a>
        </h2>
      </div>
    </div>
  </section>
));

export default WorkItem