const initialState = {
    musics: [], // liste de nos musiques 
    favoris: [] // liste de mes favoris
}

const musicReducer = (state = initialState, action) => {
     //action  type , payload ( données)

        switch(action.type) {
            case 'ADD_FAVORIS':
                console.log('ADD_FAVORIS', action, 'reducers')

                return{
                    ...state,
                    favoris : [...state.favoris, action.payload]
                };

            case 'DELETE_FAVORIS':
                console.log('DELETE_FAVORIS', action, 'reducers')
                return {
                    ...state,
                    favoris: state.favoris.filter((t)=> t.trackId!== action.payload)
                }

            case 'LOAD_MUSICS':
                console.log('LOAD_MUSICS', action, 'reducers')
                return {
                    ...state,
                    musics: action.payload,
                }

            default:
                return state
        }
}   

export default musicReducer;