import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.css';


const mailIcon = <FontAwesomeIcon icon={faEnvelope} size="2xl" />
const gitHub = <FontAwesomeIcon icon={faGithub} size="2xl" />
const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="2xl" />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <footer className="fixed-bottom footer">
      <div>
        <ul className='nav justify-content-center'>
          <li className='nav-item p-3'>
            <a href="mailto: allisonrnault@gmail.com" target="_blank">
              {mailIcon}
            </a>
          </li>
          <li className='nav-item p-3'>
            <a href="https://github.com/allisonnault" target="_blank">
              {gitHub}
            </a>
          </li>
          <li className='nav-item p-3'>
            <a href="https://www.linkedin.com/in/allison-nault-b64354246/" target="_blank">
              {linkedIn}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
