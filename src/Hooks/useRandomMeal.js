import { useEffect, useState } from "react";

export default function useRandomMeal(){
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => setData(data.meals[0]))
  }, []);

  return(data);
}