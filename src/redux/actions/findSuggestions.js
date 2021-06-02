import { types } from "../types/types";

export const findSuggestions = (text) =>({
	type: types.findSuggestions,
	payload: text
});