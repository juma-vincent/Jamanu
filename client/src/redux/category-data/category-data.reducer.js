const INITIAL_STATE = {
    categories: [
      {
        title: "cereals",
        imageUrl: "https://i.imgur.com/uHOv01N.jpg",
        id: 1,
        linkUrl: "shop/cereals",
      },
      {
        title: "legumes",
        imageUrl: "https://i.imgur.com/c1Cmuuj.jpg",
        id: 2,
        linkUrl: "shop/legumes",
      },
      {
        title: "vegetables",
        imageUrl: "https://i.imgur.com/rJDJegU.jpg",
        id: 3,
        linkUrl: "shop/vegetables",
      },
      {
        title: "fruits",
        imageUrl: "https://i.imgur.com/gLFv6NW.jpg",
        size: "large",
        id: 4,
        linkUrl: "shop/fruits",
      },
      {
        title: "tubers",
        imageUrl: "https://i.imgur.com/rwJAmWL.jpg",
        id: 5,
        linkUrl: "shop/tubers",
      },
      {
        title: "livestock",
        imageUrl: "https://i.imgur.com/f9Cp08S.jpg",
        id: 6,
        linkUrl: "shop/livestock",
      },
    ],
  };
  
  const categoryDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default categoryDataReducer;
  