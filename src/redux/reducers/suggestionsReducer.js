import { types } from "../types/types";
import { items } from "../../helpers/data/items";

const initialState = [];

export const suggestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.findSuggestions:
      const regex = new RegExp(`^${action.payload}`, "i");
      return items.filter((item) => regex.test(item.title));

    default:
      return state;
  }
};
