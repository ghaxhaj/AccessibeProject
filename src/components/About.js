import React from 'react'
import Chart from '../Images/Chart.png'


class About extends React.Component{


    playHText = (event) => {
        let text = event.target.title;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        speechSynthesis.speak(utterance);
    }


    render(){
        return(
            <div className = "container1">
                <h1 className = "aboutHeader" title = "The #1 analytics solution for ecommerce stores" onMouseOver={this.playHText}>The #1 analytics solution for ecommerce stores</h1>
                <p className = "aboutBlurb"  title = "Lorem ipsum dolor sit amet, consectetur adipscing elit. Phasellus sit amet odio vitae enim lacina tempus ut et nulla" onMouseOver={this.playHText}>Lorem ipsum dolor sit amet, consectetur adipscing elit. Phasellus sit amet odio vitae enim lacina tempus ut et nulla</p>
                <img src={Chart} title = "Image of chart" onMouseOver={this.playHText} className ="aboutImg" />
            </div>
        )
    }
}export default About