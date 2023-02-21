import { ADD, DELETE, SET_CARD_ITEMS, SET_ITEMS } from "../types/types";

const initialState = {
  basketArr: [],
  serverData: [],
  cardItems: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...state, basketArr: [...state.basketArr, payload] };

    case DELETE:
      return {
        ...state,
        cardItems: payload,
      };
    case SET_ITEMS:
      return {
        ...state,
        serverData: payload,
      };
    case SET_CARD_ITEMS:
      return {
        ...state,
        cardItems: payload,
      };
    default:
      return state;
  }
};
