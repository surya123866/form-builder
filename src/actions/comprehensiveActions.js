const SET_COMPREHENSION = "SET_COMPREHENSION";

export const setComprehension = (comprehensionData) => {
  return {
    type: SET_COMPREHENSION,
    payload: comprehensionData,
  };
};
