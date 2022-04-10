import React from 'react'
import ShoppingCart from "../Images/ShoppingCart.png"
import WalkingPerson from "../Images/WalkingPerson.png"
import DollarSign from "../Images/DollarSign.png"

class StoreSuccess extends React.Component{




    playHText = (event) => {
        let text = event.target.title;
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
            <div className = "storeSuccessContainer">
                <h1 className = "storeSuccessTitle" 
                title = "We have everything you need to track and optimize your store for success"
                onMouseOver={this.playHText}>We have everything you need to track and optimize your store for success</h1>
                
                <div className = "cardContainer">
                <div className = "card">
                    <img src={ShoppingCart} 
                    className ="cardImg"
                    title="Shopping Cart Image"
                    onMouseOver = {this.playHText} />
                    <h4 className ="cardHeader"
                    title="Real time cart abandoned data"
                    onMouseOver = {this.playHText}>Real time cart abandoned data</h4>
                    <p className ="cardBio"
                    title="Lorem ipsum dolor sit amet, consectetur adipscing elit."
                    onMouseOver={this.playHText}>Lorem ipsum dolor sit amet, consectetur adipscing elit.</p>
                    <button className = "cardButton"
                    value = "Learn More Button"
                    onMouseOver={this.playText}>Learn More</button>
                </div>
                <div className = "card">
                    <img src={WalkingPerson} className ="cardImg"
                    title="Walking Person Image"
                    onMouseOver = {this.playHText}/>
                    <h4 className ="cardHeader"
                    title="Insight to buyers journeys"
                    onMouseOver = {this.playHText}
                    >Insight to buyers journeys</h4>
                    <p className ="cardBio"
                    title="Lorem ipsum dolor sit amet, consectetur adipscing elit."
                    onMouseOver={this.playHText}>Lorem ipsum dolor sit amet, consectetur adipscing elit.</p>
                    <button className = "cardButton"
                    value = "Learn More Button"
                    onMouseOver={this.playText}>Learn More</button>    
                </div>
                <div className = "card">
                    <img src={DollarSign} className ="cardImg" 
                    title="Dollar Sign Image"
                    onMouseOver = {this.playHText}/>
                    <h4 className ="cardHeader"
                    title="Conversion rate for each product category"
                    onMouseOver={this.playHText}
                    >Conversion rate for each product category</h4>
                    <p className ="cardBio"
                    title="Lorem ipsum dolor sit amet, consectetur adipscing elit."
                    onMouseOver={this.playHText}>Lorem ipsum dolor sit amet, consectetur adipscing elit.</p>
                    <button className = "cardButton"
                    value = "Learn More Button"
                    onMouseOver={this.playText}
                    >Learn More</button>
                </div>
                </div>
            </div>
        )
    }
}export default StoreSuccess