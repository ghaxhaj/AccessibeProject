import React from 'react'
import BottomPageImg from "../Images/BottomPageImg.png"
import TwitterImg from "../Images/Twitter.png"
import FacebookImg from "../Images/Facebook.png"
import InstagramImg from "../Images/Instagram.png"

class BottomPage extends React.Component{

    playHText = (event) => {
        let text = event.target.title;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        speechSynthesis.speak(utterance);
    }


    render(){
        return(
            <div className = "bottomPageContainer">
                <img src={BottomPageImg} title = "EcomMetrics Logo" onMouseOver={this.playHText} className = "bottomPageLogo"/>
                <p className = "bottomPageSum"
                title="Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Quis ipsum suspendisse ultrices gravida, Risus sommodo viverra maecenas accumsan lacus vel faclisis."
                onMouseOver={this.playHText}
                >Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Quis ipsum suspendisse ultrices gravida, Risus sommodo viverra maecenas accumsan lacus vel faclisis.</p>
            
                <p className = "bottomPageCopyRight"
                title="©EcomMetrics 2021. All Rights Reserved."
                onMouseOver = {this.playHText}>
                ©EcomMetrics 2021. All Rights Reserved.</p>

                <p className = "address"
                title = "Main Road, building name, country."
                onMouseOver = {this.playHText}>
                Main Road, building name, country.</p>

                <p className = "email"
                title = "info@companyname.com"
                onMouseOver = {this.playHText}>
                info@companyname.com</p>

                <div className = "bottomPageSocialMedia">

                    <img src={TwitterImg} title = "Click to see our Twitter Page" onMouseOver = {this.playHText}/>
                    <img className = "spaceSocialMediaImg" src={FacebookImg}
                    title = "Click to see our Facebook Page" onMouseOver = {this.playHText} />
                    <img className = "spaceSocialMediaImg" src={InstagramImg} 
                    title = "Click to see our Instagram Page" onMouseOver = {this.playHText}/>
                </div>

            </div>
        )
    }
} export default BottomPage