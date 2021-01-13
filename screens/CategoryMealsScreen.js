// italian, japanies
import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props => {

    const renderMealItem = itemData => {
        return <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={() => {
                props.navigation.navigate('MealDetail', { mealId: itemData.item.id })
            }} />
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
                style={{ width: '100%' }}
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