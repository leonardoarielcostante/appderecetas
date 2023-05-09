import { useState, useEffect } from "react";

export default function useMealCategory(category){
  const [mealCategory, setMealCategory] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(res => res.json())
    .then(data => setMealCategory(data.meals))
  }, [category]);

  return(mealCategory);
} 