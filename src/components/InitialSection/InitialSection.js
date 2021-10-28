import "./InitialSection.css";
import headlineIcon from "../../assets/title-icon.png"
import onDeviceShowCase from "../../assets/iphone-device-image.png"
import getOnAppStore from "../../assets/get-on-app-store-image.png"
import getOnGooglePlay from "../../assets/get-on-google-play-image.png"
import expandIcon from "../../assets/expand-icon.png"
import Button from "../Button/Button"


function InitialSection (){
    return(
        <div className="completed-initial-section">
            <div className="body-initial-section">
                <div className="rightside-body-initial-section">
                    <div className="headlinebody-initial-section">
                        <img src={headlineIcon} className="headline-icon"/>
                        <span className="title-initial-section">NonFungibleMusic</span>
                    </div>
                    <span className="headline-description"> NFM è un marketplace per NFT che collega gli artisti dell'industria musicale con i fan e gli investitori.</span>
                    <div className="download-on-section">
                        <img src={getOnGooglePlay} className="get-on-image"/>
                        <img src={getOnAppStore} className="get-on-image"/>
                    </div>
                </div>
                <div className="leftside-body-initial-section">
                    <img src={onDeviceShowCase} className="onDeviceShowCase"/>
                </div>
            </div>
            <div className="lower-part-initial-section">
                <div className="mobile-buttons-section">

                    <Button classButton={"mobile-button-log-in"}
                        buttonText={"Accedi"}
                        buttonIcon={""}
                        buttonLink={"#"}
                    />

                    <Button classButton={"mobile-button-sign-up"}
                        buttonText={"Registrati"}
                        buttonIcon={""}
                        buttonLink={"#"}
                    
                    />
                </div>
                <img src={expandIcon} className="expand-icon"/>       
            </div>
        </div> 
    );
}
export default InitialSection;