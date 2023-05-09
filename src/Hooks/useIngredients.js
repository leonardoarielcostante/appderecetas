import { useEffect, useState } from "react";

export default function useCategories(){
  const [list, setList] = useState(null);

  useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then(res => res.json())
    .then(data => setList(data.meals))
  }, []);

  return(list);
}