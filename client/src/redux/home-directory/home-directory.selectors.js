import { createSelector } from "reselect";

const selectHomeDirectory = (state) => state.homeDirectory;

export const selectHomeDirectoryCategories = createSelector(
  [selectHomeDirectory],
  (homeDirectory) => homeDirectory.categories
);
