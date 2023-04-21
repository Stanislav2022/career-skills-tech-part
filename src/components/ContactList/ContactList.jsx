import css from "../Phonebook.module.css"
// import { AiOutlineContacts } from "react-icons/ai";
import { useSelector } from "react-redux";
import { getContacts } from "redux/contacts/contacts-selector";
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
          <img src="https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=320" alt="two-yellow-labrador-retriever-puppies"></img>
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