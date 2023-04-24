import React from 'react'
import { useSelector } from 'react-redux';
import { selectCards } from 'redux/cards/cards-selector';

export const Pagination = ({ cardsPerPage }) => {
  const cards = useSelector(selectCards);
    const totalCards = cards.lenght;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
      <div>
          <ul>
              {pageNumbers.map(number => (
                  <li key={number}>
                      <a href="!#">
                          {number}
                      </a>
                  </li>
              ))}
          </ul>
      </div>
  )
}

