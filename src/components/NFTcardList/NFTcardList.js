import './NFTcardList.css';
import NFTcard from '../NFTcard/NFTcard';
import Button from '../Button/Button';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
    
     
    const buttons = props.listButton.map((buttonList, i) =>
        (
            <Button
            buttonText={buttonList.buttonText}
            buttonIcon={require("../../assets/"+buttonList.buttonIcon).default}
            buttonLink={buttonList.buttonLink}
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

                {buttons}

            </div>

        </div>

        <div className="card-list">
        {cards}
        </div>
    
        <div className="mobile-button">

            {buttons}

        </div>

    </div>

)

}
export default NFTcardList;