import { useDispatch } from 'react-redux';
import { fetchCards } from "redux/cards/cards-operation";
import { useEffect } from "react";
import css from "./App.module.css";
import { CardsList } from './CardsList/CardsList';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCards())
    }, [dispatch]);
    fetchCards();

    return (
        <>
            <div className={css.form}>
                <CardsList />
            </div>
       </>
    )
}

