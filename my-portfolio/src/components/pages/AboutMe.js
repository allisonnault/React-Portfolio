import React from 'react';
import image from '../../images/myPic.jpeg'; 

export default function AboutMe() {
  return (
    <div className='p-3 row'>
      <div className='col-6'>
        <div className='card'>
        <img src={image}></img>
        </div>
        
      </div>
      <div className='col-6'>
      <div>
      <p>
          A highly motivated team leader with 2 years of professional sales experience in the fitness industry. A top performer able to leverage Hubspot CRM tools to increase productivity, ensure quality standards, and implement best practices. Experienced in overseeing multiple departments, training staff, and developing team members
        </p>
        <h3>Technical Skills</h3>
        <p>
          JavaScript, CSS, HTML, SQL, NoSQL, GitHub, MongoDB, MySQL, Express, Node, Handlebars, JQuery, Bootstrap, React
        </p>
      </div>
      <div>
        <h3>Other Skills</h3>
        <ul>
          <li>
            Managing multiple departments
          </li>
          <li>
            Sales and outreach management
          </li>
          <li>
            Client account management
          </li>
          <li>
            Employee training and development
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}