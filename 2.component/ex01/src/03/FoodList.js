import React from 'react';
import FoodListItem from './FoodListItem';

function FoodList({foods}) {
    return (
        <div>
            <ul>
                {foods.map((food) => <FoodListItem 
                                            name={food.name} 
                                            quantity={food.quantity} 
                                            key={food.no}/>)}
            </ul>
        </div>
    );
}

export default FoodList;