import React, { Component } from 'react'
import video from '../video/fuk.mp4'
import EyeFollow from './Eye';
class HoverMenu extends Component {

    render() {
        return (
            <div>
                
                <ul>
                 
                    {/* <li> <a  href="#sec1" > Home</a> </li> */}
                    <li> <a  href="#sec1"> MY CV</a> </li>
                    <li> <a href="#sec2" >GITHUB</a> </li>
                    <li> <a href="#sec3"> MY EYE</a> </li>
                    <li> <a href="#sec4"> Our Team</a> </li>
                    <li> <a   href="#sec5"> Contact</a> </li>
                </ul>
                <EyeFollow className="testeye" />
                <audio autoPlay loop className="music-edit" src={require("./thisfelling.MP3")} controls />

                    <div className="wrap-video">
                        <video id="background-video" loop autoPlay muted >
                            <source src={video} type="video/mp4" />
                            <source src={video} type="video/ogg" />
                        </video>
                       
                    </div>
                    <div>
                    <div className="section" id="sec1" data-text=""> </div>
                    <div className="section" id="sec2" data-text=""> </div>
                    <div className="section" id="sec3" data-text=""> </div>
                    <div className="section" id="sec4" data-text=""> </div>
                    <div className="section" id="sec5" data-text="Example Text"> </div>
</div>
                
            </div>
        )
    }
}
export default HoverMenu;