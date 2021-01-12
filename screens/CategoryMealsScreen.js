// italian, japanies
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen!</Text>
            <Button title="Go to Meal Details Screen" onPress={() => {
                props.navigation.navigate('MealDetail')
                // props.navigation.replace('MealDetail')
            }}/>
        </View>
    );
}

export default CategoryMealsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});