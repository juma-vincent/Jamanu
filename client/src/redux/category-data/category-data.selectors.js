import { createSelector } from "reselect";

const selectCategoryData = (state) => state.categoryData;

export const selectCategories = createSelector(
  [selectCategoryData],
  (categoryData) => categoryData.categories
);
