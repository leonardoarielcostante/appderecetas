import { useState, useEffect } from "react";

export default function useMealSearch(meal){
  const [mealSearch, setMealSearch] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then(res => res.json())
    .then(data => setMealSearch(data.meals))
  }, [meal]);

  return(mealSearch);
} 