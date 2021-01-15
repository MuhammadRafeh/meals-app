import { MEALS } from "../data/dummy-data";

const initialState = {
    meals: MEALS, // Array of Objects that we are importing
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    return state;
}

export default mealsReducer
