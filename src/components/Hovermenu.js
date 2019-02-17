import React, { Component } from 'react'
import video from '../video/fuk.mp4'
import EyeFollow from './Eye';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  
  const items = [
    {
      src:require(`./1.jpg`),
      altText: 'MÁI CHE HOÀNG QUÝ',
      caption: 'https://maichehoangquy.com'
    },
    {
      src: require(`./2.jpg`),  
      altText: 'MH STONE',
      caption: 'https://mhstone.herokuapp.com'
    },
    {
      src: require(`./3.jpg`),
      altText: 'BATTLE NOW',
      caption: 'https://battlenow.herokuapp.com'
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
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
//    state ={
//         numberOfImage : 1
//    }
//    changeImage =() =>{
    
//        console.log( this.state.numberOfImage)
//        this.setState({numberOfImage:(this.state.numberOfImage % 5) +1 })
//    }

//     componentDidMount(){
//         setInterval(this.changeImage, 3000  )

//     }
    render() {
        const { activeIndex } = this.state;
        const slides = items.map((item) => {
          return (
            <CarouselItem 
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <img  className="imgslide" src={item.src} alt={item.altText} />
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });
        return (
            <div>
                {/* add reponsive navigation */}
                <input type='checkbox' id='chk' />
                  <label for='chk'className="show-menu-btn">  
                  <i className="fas fa-bars"></i>
                  </label>
               

                {/* navigation without reponsive */}


                <ul className="menu">
     
                    <li> <a  href="#sec1"> HOME</a> </li>
                    <li> <a href="#sec2" >ABOUT US </a> </li>
                    <li> <a href="#sec3">STYLE </a> </li>
                    <li> <a href="#sec4">DRAMA </a> </li>
                    <li> <a href="#sec5"> CONTACT</a> </li>
                    <label for='chk' className="hide-menu-btn">
                    <i className="fas fa-times"></i>
                    </label>
                </ul>

                <EyeFollow  />
                <audio auto  loop className="music-edit" src={require("./thisfelling.MP3")} controls />

                    <div className="wrap-video">
                        <video id="background-video" loop autoPlay muted >
                            <source src={video} type="video/mp4" />
                            <source src={video} type="video/ogg" />
                        </video>
                       
                    </div>
                    <div>
                    <div className="section" id="sec1" data-text=""> </div>
                    <div className="section" id="sec2" data-text="">
                    
                    <div className="product">
                   
                            {/* <h1> ABOUT US</h1> */}
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                               Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                                Ipsum.</p>
                        </div>
                     </div>

                    <div className="section_image"  id="sec3" data-text="" >
                    {/* Slide */}
                    <Carousel  activeIndex={activeIndex}  next={this.next}  previous={this.previous} >
                        <CarouselIndicators  items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                     </div>

                    <div className="section" id="sec4" data-text="">
                   
                     </div>
                    <div className="section" id="sec5" data-text="">
                    
                     </div>
</div>
                
            </div>
        )
    }
}
export default HoverMenu;