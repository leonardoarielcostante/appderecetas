import { useEffect, useState } from "react";

export default function useCategories(){
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => setCategories(data.categories));
  }, [])

  return(categories);
}