import React from 'react';
import '../styles/CardItem.css';
import IconFolder from './IconFolder.js';
import IconExternal from './IconExternal.js';
import IconGitHub from './github';
import {Link} from 'react-router-dom';

function CardItem(props) {
    return (
        <div className='card-item'>

            <div className='card-item-rowTwo'>
            <div className= 'card-header-columnThree'>
                    
                    <a target="_blank" href={props.gitLink} >
                    <IconGitHub/>
                    </a>

                </div>
                <div className='card-header-columnTwo'>
                <a target="_blank" href={props.projectLink} >
                   <IconExternal/>
                   </a>
                </div>
           
            </div>

            <div className='card-item-rowOne'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
          <div className='bottom-tech'>
          <p>{props.tech}</p>
          </div>
                
        

        </div>



    );
}

export default CardItem;
