import React from 'react';

import './index.css';


// function Card(props){
//      return( <>
//        <div className='cards'>
//          <div className="cardimage">
           
//            <div className="card__info">
             
             
             
            
//            </div>
//          </div>
//        </div>
    
//       </>);
//    }

   function Card(props)
   {
     return (
       <>
       <div className="main">
       <div className="cards">
       <img src={props.imgsrc} alt="mypic" className="card_img"/>
         {/* <div className='image'> 
         
          </div> */}
          
          <div className='title'>
          <span className="card_category">{props.title}</span>
          </div>
          
          <div className='description'>
           <h3 className="card__title">{props.seriesname}</h3>
             <a href={props.link} target="_blank" ></a>
            <button>Watch Now</button>
           </div>
       
         </div>
       </div>
       </>
     )
   }

   export default Card;