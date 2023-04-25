import React from 'react'
import { useDispatch } from 'react-redux';
import { addFollow } from 'redux/follow/follow-slice';
import { addFolowers } from 'redux/cards/cards-operation';
import css from "../Button/Button.module.css";

export const ButtonFollow = ({ card }) => {
    const dispatch = useDispatch();
  const onFollow = () => {
    dispatch(addFollow(card.user));
    dispatch(addFolowers(card));
  };
    return (
      <button className={css.button__vote} onClick={onFollow} type="button" name="button">Follow</button>
  )
}
