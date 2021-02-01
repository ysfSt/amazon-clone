export const initialState = {
  card: [],
  user: null,
};

export const getCardTotal = (card) => {
  return card?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "EMPTY_CARD":
      return { ...state, card: action.card };
    case "SET_USER":
      return { ...state, user: action.user };
    case "ADD_TO_CARD":
      if (state.card.length === 0) {
        return { ...state, card: [...state.card, action.item] };
      } else {
        let index = state.card.findIndex((item) => item.id === action.item.id);
        return index === -1
          ? { ...state, card: [...state.card, action.item] }
          : state;
      }
      break;
    case "REMOVE_FROM_CARD":
      const newCard = [...state.card];
      return {
        ...state,
        card: newCard.filter((item) => item.id !== action.item.id),
      };
      break;
    default:
      return state;
  }
};

export default reducer;
