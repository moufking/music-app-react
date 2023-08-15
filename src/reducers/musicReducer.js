const initialState = {
    musics: [],
    favoris :[]
  }

// This code snippet defines a reducer function for managing the state of a music application. It handles actions for adding and deleting favorite songs, as well as loading music data into the state.
  const musicsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FAVORIS':
        return {
          ...state,
          favoris: [...state.favoris, action.payload]
        };
      case 'DELETE_FAVORIS':
        console.log('DELETE_FAVORIS')
        return {
          ...state,
          favoris: state.favoris.filter(task => task.trackId !== action.payload)
        };
        case 'LOAD_MUSIC':
            return {
                ...state, 
                musics: action.payload
            }
      default:
        return state;
    }
  };

  export default musicsReducer;
