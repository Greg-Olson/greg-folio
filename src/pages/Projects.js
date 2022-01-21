import React, { Component } from 'react';
import video from '../media/WaveTexture.mp4';
import ReactCardCarousel from 'react-card-carousel';

import '../styles/Projects.css';
import CardItem from '../components/CardItem';



class Projects extends Component {
  render() {

    return (
      <>
        <video autoPlay muted loop src={video} />
        <ReactCardCarousel autoplay={true} autoplay_speed={500000}>

          <div className='project-card'>
            <CardItem 
            title = 'Project Portfolio'
            description = 'A portfolio website built with node.js and React.'
            tech = "Javascript HTML CSS APIs"
            gitLink = "https://www.google.com"
            projectLink = "https://www.google.com"
            
            />
          
          </div>

          <div className='project-card'>
          <CardItem 
            title = 'Chat Application'
            description = 'A multi room chat service built with a java server on the back end.  I created the java server to handle basic HTTP get requests and to upgrade the connection to a websocket once the chatroom has been entered.  Created both a browser client and android application client.'
           tech = "Java HTTP Websockets Android"
           gitLink = "https://www.google.com"
           projectLink = "https://www.google.com"
            />
          </div>
          <div className='project-card'>
          <CardItem 
            title = 'The Next Project'
            description = 'Something in Rust. Maybe a server.  Only time will tell.'
           tech = "Rust Server API"
            />
          </div>

   
       
        </ReactCardCarousel>
      </>
    );
  }
}

export default Projects;