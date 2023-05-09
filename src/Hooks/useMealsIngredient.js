import { useEffect, useState } from "react";

export default function useMealsIngredient(ingredient){
  const [mealsIngredient, setmealsIngredient] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(res => res.json())
    .then(data => setmealsIngredient(data.meals))
  }, [ingredient]);

  return(mealsIngredient);
}