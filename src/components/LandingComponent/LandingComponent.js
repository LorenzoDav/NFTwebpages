import "./LandingComponent.css";
import headlineIcon from "../../assets/title-icon.png"
import onDeviceShowCase from "../../assets/iphone-device-image.png"
import getOnAppStore from "../../assets/get-on-app-store-image.png"
import getOnGooglePlay from "../../assets/get-on-google-play-image.png"
import expandIcon from "../../assets/expand-icon.png"


function LandingComponent (){
    return(
        <div className="completed-landing-component">
            <div className="body-landing-component">
                <div className="rightside-body-landing-component">
                    <div className="headlinebody-landing-component">
                        <img src={headlineIcon} className="headline-icon"/>
                        <span className="title-landing-component">NonFungibleMusic</span>
                    </div>
                    <span className="headline-description"> NFM è un marketplace per NFT che collega gli artisti dell'industria musicale con i fan e gli investitori</span>
                    <div className="download-on-section">
                        <img src={getOnGooglePlay} className="get-on-image"/>
                        <img src={getOnAppStore} className="get-on-image"/>
                    </div>
                </div>
                <div className="leftside-body-landing-component">
                    <img src={onDeviceShowCase} className="onDeviceShowCase"/>
                </div>
            </div>
            <div className="footer-landing-component">
                <img src={expandIcon} className="expand-icon"/>       
            </div>
        </div> 
    );
}
export default LandingComponent;