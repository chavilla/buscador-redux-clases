import { types } from "../types/types";


export const findResult = (text) =>({
	type: types.findResult,
	payload: text
});