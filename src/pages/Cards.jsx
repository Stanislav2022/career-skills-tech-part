import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CardsList } from './CardsList/CardsList';
import { fetchCards } from "redux/cards/cards-operation";
import css from "./App.module.css";
const styles = {
    form: {
        display: "flex",
        margin: 'auto',
        padding: '10px',
    }
}

export default function Cards() {
   const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCards())
    }, [dispatch]);
    fetchCards();

  return (
            <div tyle={styles.form}>
                <CardsList />
            </div>
  );
}