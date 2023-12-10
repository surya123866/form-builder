import { setCloze } from "../actions/clozeActions";

const initialState = [];

const clozeReducer = (state = initialState, action) => {
  switch (action.type) {
    case setCloze:
      return action.payload;
    default:
      return state;
  }
};

export default clozeReducer;
