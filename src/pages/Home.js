import React from "react";
import video from '../media/WaveTexture.mp4';
import '../styles/Home.css';
import {Link} from 'react-router-dom';
import img from '../media/GreenRiverPortrait.jpg';
import Button from '../components/Button.js';


function Home() {
    return (
      <>
      <video autoPlay muted loop src={video} />
      
      <div className='container'>
        
        <div className='card'>
            <div className="row">
            <div className='first-column'>
            <img src={img}/>
            </div>
              
            <div className='second-column'>
            <p>   Hello! My name is Greg Olson. I started my software journey in 2016 working as a biologist at the
                U.S. Geological Survey. I realized that I needed a more efficient way
                to assure data quality and started learning R to create scripts.
                Since then I've taken every opportunity to streamline data processes in my daily work by automating calculations and work flows.
                Now I am a student taking my software skills to the next level.</p>
  
                </div>
            </div>
           
                <div className='row'>
                <div className='button'>
                <Link to ='/Projects'>  
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                Projects
                </Button></Link>
                </div>
                </div>
            

            </div>
       
          

            
    </div>
      
      
      
    

      </>
    );
  }

export default Home;