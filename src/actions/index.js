export const addFavorisAction = (value) => {
  console.log(value, '[addFavorisAction action ]')
    return {
      type: "ADD_FAVORIS",
      payload: value,
    };
  };

  export const loadList = (value) => {

    return {
      type: "LOAD_MUSIC",
      payload: value
    };
  };
  
  export const deleteFavorisAction = (id) => {
    return {
      type: "DELETE_FAVORIS",
      payload: id,
    };
  };