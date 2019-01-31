import React, { Component } from 'react'

class EyeFollow extends Component {

    render() {
        // Xây dựng 1 eye follower
        var balls = document.getElementsByClassName("ball");
        document.onmousemove = (event) => {
            var x = event.clientX * 100 / window.innerWidth + "%"
            var y = event.clientY * 100 / window.innerHeight + "%"
            // event.clientX => get the horizontal coordinate of the mouse moving
            // event.clientY => get the verrizontal coordinate of the mouse moving
            // window.innerWidth => get width browser
            // window.innerheight => get heght browser
            for (let index = 0; index < 2; index++) {
                balls[index].style.left = x;
                balls[index].style.top = y;
                balls[index].style.transform = "translate(-" + x + ",-" + y + ")";
            }
        }
        return (

            <div>
              
                <div className="eyes">
                    <div className="eye">
                        <div className="ball">

                        </div>
                    </div>

                    <div className="eye">
                        <div className="ball">

                        </div>
                    </div>
                    <h3 className="text">_______</h3>
                </div>

{/* <h3> Welcome To My Website !!!</h3> */}

            </div>

        )
    }
}
export default EyeFollow;