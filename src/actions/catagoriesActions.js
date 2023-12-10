const SET_CATEGORIES = "SET_CATEGORIES";

export const setCategories = (categoriesData) => {
  return {
    type: SET_CATEGORIES,
    payload: categoriesData,
  };
};
