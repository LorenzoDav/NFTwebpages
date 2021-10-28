import './NFTcardList.css';
import NFTcard from '../NFTcard/NFTcard';
import Button from '../Button/Button';
import arrowIcon from '../../assets/arrow-icon.png';

function NFTcardList(props){

    const artists = [...props.artists];

    const cards = artists.map((artist, i) => 
        (
            <NFTcard className="card" 
                heartsNumber={artist.heartsNumber}
                userProfileIcon={require(`../../assets/${artist.userProfileIcon}`).default}
                usernameArtist={artist.usernameArtist}
                NFTtitle={artist.NFTtitle}
                usernameSeller={artist.usernameSeller}
                ethereumPrice={artist.ethereumPrice}
                ethereumLastOffer={artist.ethereumLastOffer}
                cardImage={require("../../assets/"+artist.cardImage).default}
                isFeat={artist.isFeat}
                usernameArtistFeat={artist.usernameArtistFeat}
                key={i}
            />
        )   
    )
    
 

    
return (
    <div className="completed-card-list">

        <div className="header-card-list">

            <div className="header-leftside">

                <span className="category-name">{props.categoryName}</span>

                <img src={props.categoryNameIcon} className="category-name-icon"/>

            </div>

            <div className="web-tablet-button">

                
        <Button
            buttonText={"Scopri di più"}
            buttonIcon={arrowIcon}
            buttonLink={"#"}
        
            />

            </div>

        </div>

        <div className="card-list">
        {cards}
        </div>
    
        <div className="mobile-button">

        <Button
            buttonText={"Scopri di più"}
            buttonIcon={arrowIcon}
            buttonLink={"#"}
        
            />


        </div>

    </div>

)

}
export default NFTcardList;