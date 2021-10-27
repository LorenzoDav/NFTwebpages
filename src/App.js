
import NFTcardList from './components/NFTcardList/NFTcardList';
import blueCrownIcon from './assets/blue-crown-icon.png';
import rocketIcon from './assets/rocket-icon.png';
import affermati from './assets/cardsAffermati.json';
import emergenti from './assets/cardsEmergenti.json';
import bottonsParts from './assets/buttonsParts.json';
import LandingComponent from './components/LandingComponent/LandingComponent';
import './App.css';


function App() {
  return (
    <div className='landing-component-container'>
      <LandingComponent/>
      { /*
      <div className="card-list-container">

      

        <NFTcardList 
          categoryName={"Artisti affermmati"}
          categoryNameIcon={blueCrownIcon}
          artists={affermati}
          listButton={bottonsParts}
        />

        { <NFTcardList 
          categoryName={"Artisti emergenti"}
          categoryNameIcon={rocketIcon}
          artists={emergenti}
          listButton={bottonsParts}
          key={1}
        /> }
        
      </div>
      */}
    </div>
  );
}

export default App;
