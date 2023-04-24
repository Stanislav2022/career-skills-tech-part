import css from "../App.module.css";
import { useSelector } from "react-redux";
import { selectCards } from "redux/cards/cards-selector";
import imageChat from '../../images/picture.webp'; 
import logo from '../../images/logo.webp';
import { selectFollow } from "redux/follow/follow-selector";
// import { getFilter } from "redux/filter/filter-selector";
import { ButtonFollowing } from "components/Button/ButtonFollowing";
import { ButtonFollow } from "components/Button/ButtonFollow";

export const CardsList = () => {
  const cards = useSelector(selectCards);
  const follow = useSelector(selectFollow);

  const elements = cards.map((card) => {
    if (follow.items.includes(card.user)) {
      return <li className={css.cards__list} key={card.id}>
        <img className={css.logo} src={logo} width="76" height="22" alt="logo" />
        <img className={css.image__chat} src={imageChat} width="308" height="168" alt="logo" />
        <div className={css.avatar__box}></div>
        <p className={css.text}>{card.tweets} TWEETS</p>
        <p className={css.text}>{card.followers} FOLLOWERS</p>
        <ButtonFollowing card={card} />
      </li>
    }
      return <li className={css.cards__list} key={card.id}>
        <img className={css.logo} src={logo} width="76" height="22" alt="logo" />
        <img className={css.image__chat} src={imageChat} width="308" height="168" alt="logo" />
        <div className={css.avatar__box}></div>
        <p className={css.text}>{card.tweets} TWEETS</p>
        <p className={css.text}>{card.followers} FOLLOWERS</p>
        <ButtonFollow card={card} />
      </li>
})
  
  return (
    <>
      <ul className={css.wrapper}>
        {elements}
      </ul>
      
    </>
  )
}