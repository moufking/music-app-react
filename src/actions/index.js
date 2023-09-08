export const addFavorisAction = (value) => {

    console.log('laddFavorisAction', value, 'action')

    return {
        type: 'ADD_FAVORIS',
        payload : value
    }
}

export const deleteFavorisAction = (id) => {
    console.log('deleteFavorisAction', id, 'action')
    return {
        type: 'DELETE_FAVORIS',
        payload : id
    }
}

export  const loadMusics = (data) => {

    console.log('loadMusics', data, 'action')
    return {
        type: 'LOAD_MUSICS',
        payload : data
    }

}