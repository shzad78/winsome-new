import React from 'react';
import { data } from './data';

export default class App extends React.Component {
  render(){
    return(
      <div className="container">
       <div className="junior">
         <h2>{data.p1.heading}</h2>
         <div className= "box"></div>
         <p>
         {data.p1.text}
          </p>
          <div className="image" >
          <img src= {data.p1.imageLink} height="450px" width="650px"/>
          </div>
         </div>
      <div className="creating">
         <h2>{data.p1.heading}</h2>
         <div className= "box"></div>
         <div className="textimage">
         <div className="pdivs">        
            <p>
            {data.p2.p21.text}
            </p>
            <p>
            {data.p2.p22.text}
            </p>
            <p>
            {data.p2.p23.text}
            </p>
            </div>
            <div className="image">
            <img className='imglion' src= {data.p2.imageLink}/>
            </div>
          </div>
         </div> 
         <div className="key">
         <h2>{data.p3.heading}</h2>
         <div className= "box"></div>
         <p>
         {data.p3.text}
          </p>
          </div>
      </div>
    )
  }
};