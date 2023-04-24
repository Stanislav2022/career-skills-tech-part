import React from 'react'
import css from "../Button/Button.module.css";

export const ButtonLoadMore = ({onClick}) => {
    return (
      <button className={css.button__vote} onClick={onClick} type="button" name="button">Load more</button>
  )
}
