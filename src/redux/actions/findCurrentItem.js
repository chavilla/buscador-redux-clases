import { types } from "../types/types";


export const findCurrentItem = (id) =>({
	type: types.findCurrentItem,
	payload: id
});