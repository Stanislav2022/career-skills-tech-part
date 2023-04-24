import { useDispatch } from 'react-redux';
import { fetchCards } from "redux/cards/cards-operation";
import { useEffect } from "react";
import css from "./App.module.css";
import { CardsList } from './CardsList/CardsList';
// import { Filter } from './Filter/Filter';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCards())
    }, [dispatch]);
    fetchCards();

    return (
        <>
            <div className={css.form}>
                {/* <Filter /> */}
                <CardsList/>
            </div>
       </>
    )
}

