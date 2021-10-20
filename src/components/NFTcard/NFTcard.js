import ' ./NFTcard.css';

function NFTcard(){

    return(

        <div className="body-card">

            <div className="top-card">

                <img src="card-three-points" className="left-card-icon"/>

                <h3 className="card-hearts-number">492</h3>

                <img src="card-hearts-icon" className="right-card-icon"/>

                <img src="card-save-icon" className="right-card-icon"/>

            </div>

            <div className="card-image-container">

                <img src="card-image-1" className="card-image"/>

                <img src="card-sound-try-icon" className="volume-card-icon"/>

            </div>

            <div className="bottom-card"> 

            <span className="username-artist"></span>

            <span className="title-NFT"></span>
            
            <span className="text-about-sells"></span>
            
            <span className="text-about-sells"></span>

            <img src="etherium-icon" className="etherium-icon"/>
            
            <span className="text-about-sells"></span>
            
            <img src="etherium-icon" className="etherium-icon"/>

            </div>

        </div>

    );
}