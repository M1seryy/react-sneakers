const initialState = {
  basketArr: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD":
      return { ...state, basketArr: [...state.basketArr, payload] };

    case "CHANGE":
      return {
        ...state,
        basketArr: payload,
      };
    default:
      return state;
  }
};
