import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFollow } from 'redux/follow/follow-slice';
import { removeFolowers } from 'redux/cards/cards-operation';
import css from "../Button/Button.module.css";



export const ButtonFollowing = ({card}) => {
    const dispatch = useDispatch();
  const onFollow = () => {
    dispatch(removeFollow(card.user));
    dispatch(removeFolowers(card));
  }
  

    return (
      <button className={css.button__vote} style={{backgroundColor: "#5CD3A8"}} onClick={onFollow} type = "button" name = "button">Following</button>
  )
}