import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import './App.css'

export default function App() {

  const handleEmailClick = () => {
    window.open("mailto:arpit.khandelwal@gmail.com", "_blank");
  };

  return (
    <div className="App">
      <img src={reactLogo} alt="Profile image" />

      <main>
        <h2>Arpit Khandelwal</h2>
        <h3>Frontend Developer</h3>
        <h4>arpitkhandelwal.com</h4>
        <a href="mailto:arpit.khandelwal2002@gmail.com"><FontAwesomeIcon icon={faEnvelope} />Email</a>



        <div className='About'>
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laudantium optio ducimus ipsum laboriosam debitis? Nostrum magnam eligendi ratione possimus repellat eaque commodi excepturi. Repellat fuga necessitatibus iure molestiae provident?
          </p>
        </div>

        <div className='Interests'>
          <h3>Interests</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non labore temporibus quae. Iste autem alias ad. Quis voluptas quos maiores reiciendis velit earum. Odit nihil maiores porro hic maxime quis?</p>
        </div>

      </main>

      <footer>
          <FontAwesomeIcon className='social-icon' icon={faLinkedin} />
          <FontAwesomeIcon className='social-icon' icon={faTwitter} />
          <FontAwesomeIcon className='social-icon' icon={faInstagram} />
          <FontAwesomeIcon className='social-icon' icon={faGithub} />
        
      </footer>
    </div>

  )
}
