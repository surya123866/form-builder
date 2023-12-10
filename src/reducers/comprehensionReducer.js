import { setComprehension } from "../actions/comprehensiveActions";

const initialState = [];

const comprehensionReducer = (state = initialState, action) => {
  switch (action.type) {
    case setComprehension:
      return action.payload;
    default:
      return state;
  }
};

export default comprehensionReducer;
