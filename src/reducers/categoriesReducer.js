import { setCategories } from "../actions/catagoriesReducer";

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case setCategories:
      return action.payload;
    default:
      return state;
  }
};

export default categoriesReducer;
