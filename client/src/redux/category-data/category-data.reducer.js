const INITIAL_STATE = {
    categories: [
      {
        title: "meat",
        imageUrl: "https://i.imgur.com/lqy3UtH.jpg",
        id: 6,
        linkUrl: "shop/meat",
      },

      {
        title: "vegetables",
        imageUrl: "https://i.imgur.com/Q1B869l.jpg",
        id: 3,
        linkUrl: "shop/vegetables",
      },
      {
        title: "fruits",
        imageUrl: "https://i.imgur.com/JsnzFJU.jpg",
        size: "large",
        id: 4,
        linkUrl: "shop/fruits",
      },
      
      {
        title: "tubers",
        imageUrl: "https://i.imgur.com/w5I5Y1L.jpg",
        id: 5,
        linkUrl: "shop/tubers",
      },

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
      
      
    ],
  };
  
  const categoryDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default categoryDataReducer;
  