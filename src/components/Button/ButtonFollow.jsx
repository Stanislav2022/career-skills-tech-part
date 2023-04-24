import React from 'react'
import { useDispatch } from 'react-redux';
import { addFollow } from 'redux/follow/follow-slice';
import css from "../Button/Button.module.css";



export const ButtonFollow = ({ user }) => {
    const dispatch = useDispatch();
    const onFollow = () => dispatch(addFollow(user));

    return (
      <button className={css.button__vote} onClick={onFollow} type = "button" name = "button">Follow</button>
  )
}
