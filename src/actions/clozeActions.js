const SET_CLOZE = "SET_CLOZE";

export const setCloze = (clozeData) => {
  return {
    type: SET_CLOZE,
    payload: clozeData,
  };
};
