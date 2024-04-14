import { CATEGORIES, MEALS } from "../Data/Data";
import { useLayoutEffect } from "react";

import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({route, navigation}) => {

    const itemId = route.params.categoryId;

    const displayedItem = MEALS.filter((mealitem) => {
        return mealitem.categoryIds.indexOf(itemId) >= 0 ;
    })

    useLayoutEffect(() => {
        const itemTitle = CATEGORIES.find(
            (item) => item.id === itemId).title;
        navigation.setOptions({
            title: itemTitle
        }) 
    },[itemId, navigation])

    return <MealsList items={displayedItem} />
};

export default MealsOverviewScreen;