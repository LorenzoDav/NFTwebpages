
import NFTcardList from './components/NFTcardList/NFTcardList';
import blueCrownIcon from './assets/blue-crown-icon.png';
import rocketIcon from './assets/rocket-icon.png';
import affermati from './assets/cardsAffermati.json';
import emergenti from './assets/cardsEmergenti.json';

function App() {
  return (
    <div className="card-list-container">
      <NFTcardList 
        categoryName={"Artisti affermmati"}
        categoryNameIcon={blueCrownIcon}
        buttonLink={"#"}
        artists={affermati}
      />
       <NFTcardList 
        categoryName={"Artisti emergenti"}
        categoryNameIcon={rocketIcon}
        buttonLink={"#"}
        artists={emergenti}
      />
   
    </div>
    
    
  );
}

export default App;
