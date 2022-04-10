import React from 'react'
import {NavLink} from 'react-router-dom'
import Logo from '../Images/Logo.png'
import '../App.css';

class NavBar extends React.Component{
    
    playText = (event) => {
          let text = event.target.value;
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.rate = 1;
          speechSynthesis.speak(utterance);
      }

      playAText = (event) => {
        let text = event.target.type;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        speechSynthesis.speak(utterance);
    }

    playHText = (event) => {
        let text = event.target.title;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        speechSynthesis.speak(utterance);
    }
    
    
  render(){


        return(
            <div className="NavBar">
                
                    <img className = "logoImg" title="EcomMetrics Logo" onMouseOver={this.playHText}src={Logo}/>

                    <h2 className = "logoName" title="EcomMetrics" onMouseOver={this.playHText}>EcomMetrics</h2>
                
                    <div className = "navLinkDiv">
                    <a href="/" type = "Product Tab" className = "navLink" onMouseOver={this.playAText}>Product</a> 
                    <a href="/" type = "Company Tab" className = "navLink" onMouseOver={this.playAText}>Company</a> 
                    <a href="/" type = "Pricing Tab" className = "navLink" onMouseOver={this.playAText}>Pricing</a> 
                    <a href="/" type = "Contact Tab" className = "navLink" onMouseOver={this.playAText}>Contact</a> 
                    </div>
                    <button className = "getAQuoteButton" value = "Get A Quote Button" onMouseOver={this.playText}>Get A Quote</button>

            </div>
        )
    }
}export default NavBar