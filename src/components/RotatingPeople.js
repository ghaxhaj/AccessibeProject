import React from 'react'
import Image1 from "../Images/Image1.png"
import Image2 from "../Images/Image2.png"
import Image3 from "../Images/Image3.png"
import Image4 from "../Images/Image4.png"
import Image5 from "../Images/Image5.png"




class RotatingPeople extends React.Component{

    playHText = (event) => {
        let text = event.target.title;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        speechSynthesis.speak(utterance);
    }

    render(){
        return(
            <div className = "rotatingPeopleContainer">
                <h3 className ="rotatingPeopleHeader"
                title = "Trusted By Over 200,000 users and counting"
                onMouseOver={this.playHText}>
                Trusted by over <strong>200,000</strong> users and counting</h3>
                <p className="leftArrow" title = "Left Arrow" onMouseOver={this.playHText}></p>
                <p className="rightArrow" title = "Right Arrow" onMouseOver={this.playHText}></p>
                <div className = "rotatingPeopleImageDiv">
                <img src={Image1} title = "Anna Lin Profile" onMouseOver={this.playHText}/>
                <img src={Image2} title = "Mery Lou Profile" onMouseOver={this.playHText}/>
                <img src={Image3} title = "Aaron Gordon Profile" onMouseOver={this.playHText}/>
                <img src={Image4} title = "Ben Shin Profile" onMouseOver={this.playHText}/>
                <img src={Image5} title = "Maria Gor" onMouseOver={this.playHText}/>
                </div>
            </div>
        )
    }
}export default RotatingPeople