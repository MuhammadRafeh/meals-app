// italian, japanies
import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props => {

    const renderMealItem = itemData => {
        return (
            <View>
                <Text>
                    {itemData.item.title}
                </Text>
            </View>
        )
    }
    
    const catId = props.navigation.getParam('categoryId')
    // const selectedCategory = CATEGORIES.find(obj => obj.id === catId)

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    )

    return (
        <View style={styles.screen}>
            <FlatList 
                keyExtractor={(item, index) => item.id}
                data={displayedMeals} 
                renderItem={renderMealItem}
            />
        </View>
    );
}

CategoryMealsScreen.navigationOptions = navigationData => {

    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(obj => obj.id === catId)

    return {
        headerTitle: selectedCategory.title,
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