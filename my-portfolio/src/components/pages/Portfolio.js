import React from 'react';
import portfolioData from '../../portfolioData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const gitHub = <FontAwesomeIcon icon={faGithub} size="lg" />
const globe = <FontAwesomeIcon icon={faGlobe} size="lg" />


export default function Portfolio() {
  return (
    <div className='p-3 flex-row justify-center'>
      <h3>Portfolio</h3>
      <div className="row flex-row justify-space-between my-4">
      {portfolioData.map((project) => (
        <div key={project.id} className="col-12 col-xl-6 ">
          <div className='m-2 mb-4 shadow project-card'>
            <img src={project.image} className="card-img-top"></img>
            <div className='card-body'>
            <h5 className='card-title p-2 m-0'>{project.title}</h5>
            <a href={project.gitHub} className="btn" target="_blank">{gitHub}</a>
            <a href={project.deployed} className="btn" target="_blank">{globe}</a>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
