import React from 'react'
import css from "../App.module.css";
import { useSelector } from "react-redux";
import { selectFollow } from "redux/follow/follow-selector";
import { selectStatusFilter } from 'redux/filter/filter-selector';
import { selectCards } from "redux/cards/cards-selector";
import { useState } from "react";
import { ButtonLoadMore } from '../Button/ButtonLoadMore'
import { ButtonFollowing } from "components/Button/ButtonFollowing";
import { ButtonFollow } from "components/Button/ButtonFollow";
import imageChat from '../../images/picture.webp'; 
import logo from '../../images/logo.webp';
import rectangle from '../../images/rectangle.webp';


export const CurrentCards = () => {
  const cards = useSelector(selectCards);
  const follow = useSelector(selectFollow);
  const filter = useSelector(selectStatusFilter)

  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(3)

  const visibleCardFollow = cards.filter(card => follow.items.includes(card.user))
  const visibleCardFollowing = cards.filter(card => !follow.items.includes(card.user))
   console.log(visibleCardFollow);
   console.log(visibleCardFollowing);
 
  const lastCardsIndex = currentPage * cardsPerPage;
  const currentCards = cards.slice(0, lastCardsIndex);
  const nextPage = () => setCurrentPage(prev => prev + 1);

  const elements = currentCards.map((card) => {
    const bul = follow.items.includes(card.user)
        return (
          <li className={css.cards__list} key={card.id}>
              <img className={css.logo} src={logo} width="76" height="22" alt="logo" />
              <img className={css.image__chat} src={imageChat} width="308" height="168" alt="logo" />
              <img className={css.image__rectangle} src={rectangle} width="380" height="18" alt="rectangle" />
              <div className={css.avatar__box}>
                <img src={card.avatar} alt="avatar" />
              </div>
              <p className={css.text}>{card.tweets} TWEETS</p>
              <p className={css.text}>{card.followers.toLocaleString('en')} FOLLOWERS</p>
              {!bul && <ButtonFollow card={card} />}
              {bul && <ButtonFollowing card={card} />}
        </li>
  )
    })
  

  return (
    <div>
      <ul className={css.wrapper}>
        {elements}
      </ul>
      {currentCards && lastCardsIndex < cards.length ? (<ButtonLoadMore onClick={nextPage} />) : ('')}
    </div>
  )
}


