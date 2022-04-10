import React from 'react'
import Arrow from '../Images/Arrow.png'

class ContactForm extends React.Component{

    playHText = (event) => {
        let text = event.target.title;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        speechSynthesis.speak(utterance);
    }

    playInputText = (event) => {
        let text = event.target.name;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        speechSynthesis.speak(utterance);
    }

    playText = (event) => {
        let text = event.target.value;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        speechSynthesis.speak(utterance);
    }

    render(){
        return(
            <div className = "contactFormContainer">
                <h1 className = "contactFormHeader" title = "Get In Touch With Us" onMouseOver={this.playHText}>Get In Touch With Us</h1>
                    <form className = "formContainer">
                        <input className = "input" type="text" placeholder = "name" name = "Click And Type Your Name" onMouseOver={this.playInputText}></input>
                   
                        <input className = "input" type="text" placeholder = "email" name = "Click And Type Your Email" onMouseOver={this.playInputText}></input>
                 
                        <input className = "input" type="text" placeholder = "phone" name = "Click And Type Your Phone" onMouseOver={this.playInputText}></input>
                    </form>
                <button className = "contactFormButton" value = "Click To Submit Your Information" onMouseOver = {this.playText}>Send</button>
                <img className = "contactFormImg" src ={Arrow} title = "Arrow Image" onMouseOver={this.playHText}/>
            </div>
        )
    }
} export default ContactForm

 