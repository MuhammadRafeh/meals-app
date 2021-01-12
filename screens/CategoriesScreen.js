// italian, japanies
import React from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import colors from "../constants/colors";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
    const renderGridItem = itemData => {
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate("CategoryMeals", {
                    categoryId: itemData.item.id
                });
            }} />
    };

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});
