import './NFTcard.css';
import saveIcon from '../../assets/save-icon.png';
import heartIcon from '../../assets/heart-icon.png';
import galleryIcon from '../../assets/gallery-icon.png';
import ethereumIcon from '../../assets/ethereum-logo.png';
import volumeIcon from '../../assets/volume-icon.png';
import threePointsIcon from '../../assets/three-points-icon.png';
import user1ProfileImage from '../../assets/user-profile-image.png';
import crownIcon from '../../assets/crown-icon.png';

function NFTcard(){

    return(

        <div className="body-card">

            <div className="top-card">

                <img src={threePointsIcon} className="left-card-icon"/>

                <div className="right-card-icon-set">

                    <h3 className="card-hearts-number">492</h3>

                    <img src={heartIcon} className="right-card-icon-heart" />

                    <img src={saveIcon} className="right-card-icon-save"/>

                </div>

            </div>

            <div className="card-image-container">

                <img scr={galleryIcon} className="gallery-card-icon"/>

                <img src={volumeIcon}className="volume-card-icon"/>

            </div>

            <div className="bottom-card">                                                             

                <div className="left-bottom-card-side">

                    <div className="completed-artist-info-container">                                            

                        <img src={user1ProfileImage} className="artist-profile-image"/>

                        <div className="artist-info-plus-NFTtitle-container" >                                   

                            <div className="artist-info-container">     

                                <span className="username-artist">username_artista</span>

                                <img src={crownIcon} className="crown-icon"/>

                            </div>

                            <span className="title-NFT">Titolo NFT</span>

                        </div>

                    </div>
                        
                    <span className="leftside-text-about-sells" className="container-without-underline-link">venduto da <a href="link-artista" className="special-link">username</a></span>

                </div>
                
                <div className="right-bottom-card-side">

                    <div className="completed-sells-container">

                        <span className="rightside-text-about-sells">Price</span>

                        <div className= "sells-info-container">

                            <img src={ethereumIcon } className="etherium-icon"/>

                            <span className="etherium-number">1,4553</span>

                        </div>

                    </div>

                    <div className="completed-sells-container">

                        <span className="rightside-text-about-sells">Ultima offerta</span>

                        <div className= "sells-info-container">
                        
                            <img src={ethereumIcon } className="etherium-icon"/>

                            <span className="etherium-number">1,4553</span>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}
export default NFTcard;