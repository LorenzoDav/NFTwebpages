import './NFTcard.css';
import saveIcon from '../../assets/save-icon.png';
import heartIcon from '../../assets/heart-icon.png';
import galleryIcon from '../../assets/gallery-icon.png';
import ethereumIcon from '../../assets/ethereum-logo.png';
import volumeIcon from '../../assets/volume-icon.png';
import threePointsIcon from '../../assets/three-points-icon.png';
import crownIcon from '../../assets/crown-icon.png';
import fullHeartIcon from '../../assets/full-heart-icon.png';

function NFTcard(props) {
    return(
        
        <div className="body-card">
        {   /*
            (props.ciao === false) ? 
                <span>ciao</span> : 
                <span>fottiti</span>
            */
        }
            <div className="top-card">

                <img src={threePointsIcon} className="left-card-icon"/>

                <div className="right-card-icon-set">

                    <h3 className="card-hearts-number">{props.heartsNumber}</h3>

                    <img src={heartIcon} className="right-card-icon-heart" />

                    <img src={saveIcon} className="right-card-icon-save"/>

                </div>

            </div>

            <div className="card-image-container">

                <img src={props.cardImage} className="card-image"/>

                <img src={volumeIcon} className="volume-card-icon"/>

                <img src={galleryIcon} className="gallery-card-icon"/>

            </div>

            <div className="bottom-card">                                                             

                <div className="left-bottom-card-side">

                    <div className="completed-artist-info-container">                                            

                        <img src={props.userProfileIcon} className="artist-profile-image"/>

                        <div className="artist-info-plus-NFTtitle-container" >                                   

                            <div className="artist-info-container">     
                                
                                <span className="username-artist">{props.usernameArtist}</span>

                                <img src={crownIcon} className="crown-icon"/>

                            </div>

                            <span className="title-NFT">{props.NFTtitle}</span>

                        </div>

                    </div>

                                    {
                                    (props.isFeat ) ?
                                    <span className="leftside-text-about-sells" >feat <span className="username-artist">{props.usernameArtistFeat}</span></span>
                                    : ''
                                    }       
                                    
                                        
                    <span className="leftside-text-about-sells" >venduto da  <span className="username-seller">{props.usernameSeller}</span></span>

                </div>
                
                <div className="right-bottom-card-side">

                    <div className="completed-sells-container">

                        <span className="rightside-text-about-sells">Price</span>

                        <div className= "sells-info-container">

                            <img src={ethereumIcon} className="etherium-icon"/>

                            <span className="etherium-number">{props.ethereumPrice}</span>

                        </div>

                    </div>

                    <div className="completed-sells-container">

                        <span className="rightside-text-about-sells">Ultima offerta</span>

                        <div className= "sells-info-container">
                        
                            <img src={ethereumIcon} className="etherium-icon"/>

                            <span className="etherium-number">{props.ethereumLastOffer}</span>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}
export default NFTcard;