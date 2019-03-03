import React, { Component } from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import video from '../video/fuk.mp4'
import EyeFollow from './Eye';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  var FontAwesome = require('react-fontawesome');
  const items = [
    {
      href:"https://maichehoangquy.com",
      src:require(`../img/maichehoangquy.PNG`),
      altText: 'MÁI CHE HOÀNG QUÝ',
      caption: 'https://maichehoangquy.com'
    },
    {
      src: require(`../img/mhstone.PNG`),  
      altText: 'MH STONE',
      caption: 'https://mhstone.herokuapp.com'
    },
    {
      src: require(`../img/battlenow.png`),
      altText: 'BATTLE NOW',
      caption: 'https://battlenow.herokuapp.com'
     
    },
    {
      src: require(`../img/pacman.png`),
     
      caption: 'GAME PACMAN'
    }
  ];
  const items_talent = [
    {
      src:require(`../img/guitar.png`),
      // altText: 'GUITAR',
      caption:'GUITAR'
    },
    {
      src: require(`../img/beatbox.png`),  
      // altText: 'BEATBOX',
      caption:'BEATBOXING'
    },
    {
      src: require(`../img/photo.jpeg`),
      // altText: 'PHOTOGRAPHER',
      caption:'PHOTOGRAPHER'
    }
    ,
    {
      src: require(`../img/editor.jpg`),
      // altText: 'PHOTOGRAPHER',
      caption:'EDITOR'
    }
  ];
class HoverMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }
    
      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
      next_talent() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items_talent.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous_talent() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items_talent.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }

    render() {
        const { activeIndex } = this.state;
        const slides = items.map((item) => {
          return (
            <CarouselItem 
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <img  style={{height:"100vh",width:"100%"}} src={item.src} />
              <CarouselCaption captionText={item.caption}/>
            </CarouselItem>
          );
        });
        const slides_talent = items_talent.map((items_talent) => {
          return (
            <CarouselItem 
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={items_talent.src}
            >
              <img   style={{height:"100vh",width:"100%"}}  src={items_talent.src} alt={items_talent.altText} />
              <CarouselCaption  captionHeader={items_talent.caption} />
            </CarouselItem>
          );
        });
        return (
         <div>
                 
         <div className="header">
        {/* <h2 class="logo">LUONG BEAT</h2> */}
        {/* <input type="checkbox" id="chk"/>
        <label htmlFor="chk" className="show-menu-btn">
        <FontAwesome
          className="fas fa-ellipsis-h"
          name="ellipsis-h"
          />
        </label> */}

        <ul className="menu">
            <a href="#home">Home</a>
            <a href="#talent">Talent</a>
            <a href="#products">Products</a>
            <a href="#work">Work</a>
            <a href="#aboutme">About Me</a>
            {/* <label htmlFor="chk" className="hide-menu-btn">
                <FontAwesome className="fas fa-times"
                name="time"/>
            </label> */}
        </ul>
    </div>

                <EyeFollow  />
                <audio autoPlay  loop title="This Feeling - The Chainsmokers" className="music-edit" src={require("./thisfelling.MP3")} controls />

                    <div className="wrap-video">
                        <video id="background-video" loop autoPlay muted >
                            <source src={video} type="video/mp4" />
                            <source src={video} type="video/ogg" />
                        </video>
                       
                    </div>
                    <div>

                      {/* part1 */}
                    <div className="section" id="home" data-text=""> </div>

                    {/* part2 */}
                   

                     <div className="section_image"  id="talent" data-text="" >
                    {/* Slide */}
                    <Carousel  activeIndex={activeIndex}   >
                        <CarouselIndicators  items={items_talent} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides_talent}
                       
                    </Carousel>
                     </div>

                      {/* part3 */}

                    <div className="section_image"  id="products" data-text="" >
                    {/* Slide */}
                    <Carousel  activeIndex={activeIndex}  next={this.next}  previous={this.previous} >
                        <CarouselIndicators  items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                     </div>

                    <div className="section" id="work" data-text="">
                   
                     </div>
                    <div className="section" id="aboutme" data-text="">

                      <a href="https:fb.com/luongbeat98" target="_blank" alt="My Facebook" title="My Facebook" >
                      <img src={'http://www.stickpng.com/assets/images/58e91965eb97430e819064f5.png'} style={{textAlign:"center", marginRight:"20px",position:"relative",width:"70px",height:"70px",top:"29%",right:"40%"}} />
                     </a>
                      <a href="https:github.com/tranvanluong98" target="_blank" alt="My Github" title="My Github" >
                      <img src={'https://cdn.freebiesupply.com/logos/large/2x/github-icon-1-logo-png-transparent.png'} style={{textAlign:"center",marginRight:"20px",position:"relative",width:"60px",height:"60px",top:"30%",right:"30%"}} />
                     </a>
                      <a href="https://www.instagram.com/luongbeat/"  target="_blank" alt="My Instagram" title="My Instagram" >
                      <img src={'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c521.png'} style={{textAlign:"center",marginRight:"20px",position:"relative",width:"60px",height:"60px",top:"30%",right:"20%"}}/>
                     </a>
                      <a href="https://www.youtube.com/channel/UCazkthqkluHEoIbK9w1yckA?view_as=subscriber" title="My Youtube Channel"  alt="My Youtube Channel" target="_blank" >
                      <img src={'http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png'} style={{textAlign:"center",marginRight:"20px",position:"relative",width:"65px",height:"65px",top:"30%",right:"15%"}}/>
                     </a>
                     </div>
                    </div>
                {/* footage */}
                <div className="footage">
                    <span>
                     @2019 LB HUST copyright 
                    </span>
                  </div>
            </div>
        )
    }
}
export default HoverMenu;