import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectProducts = createSelector(
  [selectShop],
  (shop) => (shop.products ? shop.products : null)
);

export const selectEachProduct = (productUrlParam) =>
  createSelector([selectProducts], (products) =>
    products
      ? products.find((product) => product.id === productUrlParam)
      : null
  );

export const selectIsProductsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
