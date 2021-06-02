import { types } from "../types/types";

const initialState = [
  {
    id: 1,
    title: "React",
  },
];

export const suggestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.findSuggestions:
      return [
        {
          id: 1,
          title: "React",
        },
      ];

    default:
      return state;
  }
};
