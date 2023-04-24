import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFollow } from 'redux/follow/follow-slice';
import css from "../Button/Button.module.css";



export const ButtonFollowing = ({ user }) => {
    const dispatch = useDispatch();
    const onFollow = () => dispatch(removeFollow(user));

    return (
      <button className={css.button__vote} style={{backgroundColor: "#5CD3A8"}} onClick={onFollow} type = "button" name = "button">Following</button>
  )
}