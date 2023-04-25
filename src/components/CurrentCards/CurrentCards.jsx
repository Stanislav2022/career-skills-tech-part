import React from 'react'
import css from "../App.module.css";
import { useSelector } from "react-redux";
import imageChat from '../../images/picture.webp'; 
import logo from '../../images/logo.webp';
import rectangle from '../../images/rectangle.webp';
import { selectFollow } from "redux/follow/follow-selector";
import { ButtonFollowing } from "components/Button/ButtonFollowing";
import { ButtonFollow } from "components/Button/ButtonFollow";
import { selectStatusFilter } from 'redux/filter/filter-selector';

export const CurrentCards = ({ currentCards }) => {
  const follow = useSelector(selectFollow);
  const filter = useSelector(selectStatusFilter)
  console.log(filter);

  const elements = currentCards.map((card) => {
    const bul = follow.items.includes(card.user)
    if (bul && filter==="follow" ) {
      return <li className={css.cards__list} key={card.id}>
              <img className={css.logo} src={logo} width="76" height="22" alt="logo" />
              <img className={css.image__chat} src={imageChat} width="308" height="168" alt="logo" />
              <img className={css.image__rectangle} src={rectangle} width="380" height="18" alt="rectangle" />
              <div className={css.avatar__box}>
                <img src={card.avatar} alt="avatar" />
              </div>
              <p className={css.text}>{card.tweets} TWEETS</p>
              <p className={css.text}>{card.followers.toLocaleString('en')} FOLLOWERS</p>
              {bul && <ButtonFollow card={card} />}
              {!bul && <ButtonFollowing card={card} />}
        </li>
    } else if (!bul && filter==="following" ) {
            return <li className={css.cards__list} key={card.id}>
              <img className={css.logo} src={logo} width="76" height="22" alt="logo" />
              <img className={css.image__chat} src={imageChat} width="308" height="168" alt="logo" />
              <img className={css.image__rectangle} src={rectangle} width="380" height="18" alt="rectangle" />
              <div className={css.avatar__box}>
                <img src={card.avatar} alt="avatar" />
              </div>
              <p className={css.text}>{card.tweets} TWEETS</p>
              <p className={css.text}>{card.followers.toLocaleString('en')} FOLLOWERS</p>
              {bul && <ButtonFollow card={card} />}
              {!bul && <ButtonFollowing card={card} />}
        </li>
    } else { return <li className={css.cards__list} key={card.id}>
              <img className={css.logo} src={logo} width="76" height="22" alt="logo" />
              <img className={css.image__chat} src={imageChat} width="308" height="168" alt="logo" />
              <img className={css.image__rectangle} src={rectangle} width="380" height="18" alt="rectangle" />
              <div className={css.avatar__box}>
                <img src={card.avatar} alt="avatar" />
              </div>
              <p className={css.text}>{card.tweets} TWEETS</p>
              <p className={css.text}>{card.followers.toLocaleString('en')} FOLLOWERS</p>
              {bul && <ButtonFollow card={card} />}
              {!bul && <ButtonFollowing card={card} />}
        </li>}
    
  })
  console.log(elements);
  return (
      <ul className={css.wrapper}>
        {elements}
      </ul>
  )
}


