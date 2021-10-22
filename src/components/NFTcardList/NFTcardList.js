import './NFTcardList.css';
import NFTcard from '../NFTcard/NFTcard';
import arrowIcon from '../../assets/arrow-icon.png'


function NFTcardList(props){
    const cards = props.artists.map(artist => 
        (
            < NFTcard className="card" 
                heartsNumber={artist.heartsNumber}
                userProfileIcon={require("../../assets/"+artist.userProfileIcon).default}
                usernameArtist={artist.usernameArtist}
                NFTtitle={artist.NFTtitle}
                usernameSeller={artist.usernameSeller}
                ethereumPrice={artist.ethereumPrice}
                ethereumLastOffer={artist.ethereumLastOffer}
                cardImage={require("../../assets/"+artist.cardImage).default}
                isFeat={artist.isFeat}
                usernameArtistFeat={artist.usernameArtistFeat}
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

            <button href={props.buttonLink} className="learn-more-button">Scopri di più <img src={arrowIcon} classname="button-icon"/></button>

        </div>

        <div className="card-list">

            {cards}
{/* 
            < NFTcard className="card" 
                 heartsNumber={491}
                 userProfileIcon={userProfileImage1}
                 usernameArtist={"Domenico Bini"}
                 NFTtitle={"UEEEEEEEE"}
                 usernameSeller={"Mario Rossi"}
                 ethereumPrice={"1,5438"}
                 ethereumLastOffer={"1,5438"}
                 cardImage={cardImage1}
                 isFeat={true}
                 usernameArtistFeat={"Ciro"}
            />
        
            < NFTcard className="card"
                heartsNumber={354}
                userProfileIcon={userProfileImage}
                usernameArtist={"Domenico Bini"}
                NFTtitle={"UEEEEEEEE"}
                usernameSeller={"Mario Rossi"}
                ethereumPrice={"1,5438"}
                ethereumLastOffer={"1,5438"}
                cardImage={cardImage1}
                isFeat={true}
                usernameArtistFeat={"Ciro"}
            />

            < NFTcard className="card"
                heartsNumber={212}
                userProfileIcon={userProfileImage}
                usernameArtist={"Domenico Bini"}
                NFTtitle={"UEEEEEEEE"}
                usernameSeller={"Mario Rossi"}
                ethereumPrice={"1,5438"}
                ethereumLastOffer={"1,5438"}
                cardImage={cardImage1}
                isFeat={true}
                usernameArtistFeat={"Ciro"}
            /> */}

        </div>


    </div>


)



}
export default NFTcardList;

