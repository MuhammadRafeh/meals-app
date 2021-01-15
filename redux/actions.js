export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

export const toggleFavorite = (id) => { //It takes id of meal
    return {
        type: TOGGLE_FAVORITES,
        payload: id
    }
} 
