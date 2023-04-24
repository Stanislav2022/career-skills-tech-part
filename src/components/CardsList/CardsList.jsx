import css from "../App.module.css";
import { useSelector } from "react-redux";
import { getCards } from "redux/cards/cards-selector";
import imageChat from '../../images/picture.webp'; 
import logo from '../../images/logo.webp';
import { getFollow } from "redux/follow/follow-selector";
// import { getFilter } from "redux/filter/filter-selector";
import { ButtonFollowing } from "components/Button/ButtonFollowing";
import { ButtonFollow } from "components/Button/ButtonFollow";

export const CardsList = () => {
  const cards = useSelector(getCards);
  const follow = useSelector(getFollow);

//   const filter = useSelector(getFilter);
//   const dispatch = useDispatch();

//   const getFiltereContacts = () => {
//       if (!filter) {
//           return contacts;
//       }
//       const normalizedFilter = filter.toLocaleLowerCase();       
//       const filteredContacts = contacts.filter(({ name, phone }) => {
//           const normalizedName = name.toLocaleLowerCase();
//           const normalizedNumber = phone.toLocaleLowerCase();
//           const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
//           return result;
//       })   
//       return filteredContacts;
//   }
//   const handleDelete  = (id) => {
//       const action = deleteContact(id);
//       dispatch(action);
//   }

//   const filterContacts = getFiltereContacts();

  
  return (
    <>
      <ul className={css.wrapper}>
        {cards.map(({ avatar, user, id, tweets, followers }) => (
          <li className={css.cards__list} key={id}>
            <img className={css.logo} src={logo} width="76" height="22" alt="logo" />
            <img className={css.image__chat} src={imageChat} width="308" height="168" alt="logo" />
            <div className={css.avatar__box}></div>
            <p className={css.text}>{tweets} TWEETS</p>
            <p className={css.text}>{followers} FOLLOWERS</p>
            <ButtonFollowing user={user} />
            <ButtonFollow user={user} />
          </li>
        ))}
      </ul>
      
    </>
  )
}