// italian, japanies
import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import colors from '../constants/colors';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(obj => obj.id === catId)
    
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Meal Details Screen" onPress={() => {
                props.navigation.navigate('MealDetail')
                // props.navigation.replace('MealDetail')
            }}/>
        </View>
    );
}

CategoryMealsScreen.navigationOptions = navigationData => {

    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(obj => obj.id === catId)

    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primaryColor: ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white': colors.primaryColor
    };
    
}

export default CategoryMealsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});