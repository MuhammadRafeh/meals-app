import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import colors from '../constants/colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        // navigationOptions: {
        //     headerTitle: 'Meal Categories!!!'
        // }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
}, {
    mode: 'card',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor
    }
})

export default createAppContainer(MealsNavigator);
