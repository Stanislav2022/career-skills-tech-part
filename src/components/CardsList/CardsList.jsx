import { useSelector } from "react-redux";
import { selectCards } from "redux/cards/cards-selector";
import { CurrentCards } from "components/CurrentCards/CurrentCards";
import { useState } from "react";
import { ButtonLoadMore } from '../Button/ButtonLoadMore'
import { StatusFilter } from "components/StatusFilter/StatusFilter";


export const CardsList = () => {
  const cards = useSelector(selectCards);
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(3)
  const lastCardsIndex = currentPage * cardsPerPage;
  const currentCards = cards.slice(0, lastCardsIndex);
  const nextPage = () => setCurrentPage(prev => prev + 1);
    
  return (
    <div >
      <StatusFilter/>
      <CurrentCards currentCards={currentCards} />
      {currentCards && lastCardsIndex < cards.length ? (<ButtonLoadMore onClick={nextPage} />) : ('')}
    </div>
  )
}