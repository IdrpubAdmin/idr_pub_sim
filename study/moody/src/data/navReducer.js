const initialState = {
    navList: [
        {
            id: 1,
            name: 'HOME',
            path: '/'
        },{
            id: 2,
            name: 'STORE',
            path: '/2'
        },{
            id: 3,
            name: 'ACCESSORIES',
            path: '/'
        },{
            id: 4,
            name: 'BRAND',
            path: '/'
        },{
            id: 5,
            name: 'PAGES',
            path: '/'
        },{
            id: 6,
            name: 'ABOUT US',
            path: '/'
        },{
            id: 7,
            name: 'NEWS',
            path: '/'
        },{
            id: 8,
            name: 'CONTACT US',
            path: '/'
        },
    ],
  };
  
  export default function navReducer(state = initialState, action) {
    switch (action.type) {
      // ...
      default:
        return state;
    }
  }