import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

export const selectStatusFilter = state => state.filters.status;

export const selectVisibleCards = createSelector(
  [selectCards, selectStatusFilter],
  (cards, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.follow:
        return cards.filter(card => !card.followings);
      case statusFilters.followings:
        return cards.filter(card => card.followings);
      default:
        return cards;
    }
  }
);
