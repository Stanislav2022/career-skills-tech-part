import css from "../Phonebook.module.css"
// import { AiOutlineContacts } from "react-icons/ai";
import { useSelector } from "react-redux";
import { getContacts } from "redux/contacts/contacts-selector";
import imageChat from '../../images/picture.webp'; 
import logo from '../../images/picture.webp';
// import { getFilter } from "redux/filter/filter-selector";
;

export const ContactList = () => {
  const contacts = useSelector(getContacts);
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

  const element = contacts.map(({avatar, user, id, tweets, followers}) => {
      return <li className={css.contacts__list} key={id}>
          <img src={logo} width="76" height="22" alt="logo" />
          <img src={imageChat} width="308" height="168" alt="logo" />
          <p>{tweets} TWEETS</p>
          <p>{followers} FOLLOWERS</p>
          {user}:  
            </li>
    })
  
  return (
    <>
          <ul className={css.wrapper}>{element}</ul>
    </>
  )
}