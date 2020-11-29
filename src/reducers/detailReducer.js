const initialState = { game: {platforms:[]}, screen: {results:[]}, isLoading: true};
//we add empty aray so that it always starts with some data before the details are loaded.

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isLoading: false,
      };
    case 'LOADING_DETAIL':
      return{
        ...state,
        isLoading: true,
      }
    default:
      return { ...state };
  }
};

export default detailReducer;