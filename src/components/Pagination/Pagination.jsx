import { useSelector } from "react-redux";
import { selectCards } from "redux/cards/cards-selector";


export const PaginatedItems = ( ) => {
    const cards = useSelector(selectCards);
    let cardsOnPage = 3;
    let cardsDivide = [];
    for (let i = 0; i <Math.ceil(cards.length/cardsOnPage); i++){
        cardsDivide[i] = cards.slice((i*cardsOnPage), (i*cardsOnPage) + cardsOnPage);
    }
    console.log(cardsDivide)
    


    

  return (
      <>
          
    </>
  );
}

