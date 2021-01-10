const INITIAL_STATE = {
    categories: [
      {
        title: "cereals",
        imageUrl: "https://i.imgur.com/uHOv01N.jpg",
        id: 1,
        linkUrl: "store/cereals",
      },
      {
        title: "legumes",
        imageUrl: "https://i.imgur.com/c1Cmuuj.jpg",
        id: 2,
        linkUrl: "store/legumes",
      },
      {
        title: "vegetables",
        imageUrl: "https://i.imgur.com/rJDJegU.jpg",
        id: 3,
        linkUrl: "store/vegetables",
      },
      {
        title: "fruits",
        imageUrl: "https://i.imgur.com/gLFv6NW.jpg",
        size: "large",
        id: 4,
        linkUrl: "store/fruits",
      },
      {
        title: "tubers",
        imageUrl: "https://i.imgur.com/rwJAmWL.jpg",
        id: 5,
        linkUrl: "store/tubers",
      },
      {
        title: "livestock",
        imageUrl: "https://i.imgur.com/f9Cp08S.jpg",
        id: 6,
        linkUrl: "store/livestock",
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
  