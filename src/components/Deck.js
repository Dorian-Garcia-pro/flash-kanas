import Card from "./Card.js";
import { useSelector, useDispatch } from 'react-redux'; 
import { rndCard,rndRectoVerso, flipCard, invertInfinite, resetToRecto} from "../cardSlice.js";

function Deck({ front, back }) {
  const  cardStore  = useSelector((store) => store.card)
  const dispatch = useDispatch()

  const handleAll = () => {
    dispatch(rndCard())
    dispatch(rndRectoVerso())
  }

  function handleRndInvertInfinite() {
    dispatch(rndCard())
    dispatch(resetToRecto());
 
  }

  const handleAllInfinite = () => {
    cardStore.infiniteMode ? (
    dispatch(rndCard())
    ) :
    dispatch(flipCard());
    dispatch(invertInfinite())
  }

  const handleAllInfiniteOnlyRecto = () => {
    cardStore.rectoVerso ? ( 
      dispatch(flipCard())
        ) :   
    handleRndInvertInfinite();  
  }
 
  return <div className="card-container"> 
    <Card key={cardStore.listHiraganas[cardStore.InitNbCard].nb} front={cardStore.listHiraganas[cardStore.InitNbCard].kana} back={cardStore.listHiraganas[cardStore.InitNbCard].romaji} rndRectoVerso={cardStore.rectoVerso} />
   <button onClick={() => handleAll()}>Full RNG</button>
   <button onClick={() => handleAllInfinite()}>Full RNG - Infinite</button>
   <button onClick={() => handleAllInfiniteOnlyRecto()}>InfiniteOnlyRecto</button>
   <div className="selectKanas"></div>
  </div>;
}

export default Deck;