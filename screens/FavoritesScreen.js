// italian, japanies
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = props => {

    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    
    return (
        <MealList listData={favMeals} navigation={props.navigation} />
    );
}

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});