import React, { Component } from 'react';

class Happy extends Component {
  render() {
    return (
          
             <section>
               
              <video loop  src={require(`../video/smoke.mp4`)} autoPlay muted></video>
{/*         
               <img className='khabanh' src={require('../img/khabanh.png')} className="khabanh"/>
               <img src='https://d3.violet.vn/uploads/previews/document/1/379/712/dao.png' className="peace" /> */}
              <h1>
                  <span style={{color:'red'}} >L</span>
                  <span style={{color:'green'}}>U</span>
                  <span style={{color:'blue'}}>O</span>
                  <span style={{color:'red'}}>N</span>
                  <span style={{color:'green'}}>G</span>
                  <span style={{color:'green'}}> &ensp;</span>
                  <span style={{color:'blue'}}>B</span>
                  <span style={{color:'red'}}>E</span>
                  <span style={{color:'green'}}>A</span>
                  <span style={{color:'blue'}}>T</span>
                </h1>
                
                
               </section>
             
      
    );
  }
}

export default Happy;