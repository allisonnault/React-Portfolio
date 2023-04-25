import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const mailIcon = <FontAwesomeIcon icon={faEnvelope} size="xl" />
const gitHub = <FontAwesomeIcon icon={faGithub} size="xl" />
const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="xl" />

export default function Contact() {
   

    return (
      <div className="row justify-content-center">
        <div className="p-3 col-9 col-sm-6">
          <h3>Contact Me:</h3>
          <div className="card p-3 shadow">
            <ul className="contactInfo text-center">
              <li>
                <a href="mailto: allisonrnault@gmail.com" target="_blank">
                  {mailIcon}
                </a> allisonrnault@gmail.com
              </li>
              <br></br>
              <li>
                <a href="https://github.com/allisonnault" target="_blank">{gitHub}</a> GitHub Profile
              </li>
              <br></br>
              <li>
                <a href="https://www.linkedin.com/in/allison-nault-b64354246/" target="_blank">{linkedIn}</a> LinkedIn Profile
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}
