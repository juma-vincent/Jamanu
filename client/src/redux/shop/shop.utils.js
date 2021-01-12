import { groupBy } from "lodash";

export const convertProductsArrayToObject = (productsArray) => {
  const categoriesObject = groupBy(productsArray, "category");  
  const categoriesKeyNames = Object.keys(categoriesObject);
  return categoriesKeyNames.map((category) => {
    return {
      id: category,
      routeName: encodeURI(category.toLowerCase()),
      title: category,
      items: categoriesObject[category],
    };
  });
};

