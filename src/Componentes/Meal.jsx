import { useParams } from "react-router-dom"
import useMealSearch from "../Hooks/UseMealSearch";


export default function Meal(){
  
  const { meal } = useParams();
  const fetchdata = useMealSearch(meal);

  if (!fetchdata) {
    return <div className="flex h-screen justify-center items-center text-3xl">Loading...</div>;
  };

  const data = fetchdata[0]
  const ingredients = Object.entries(data).filter(([key, data]) => key.includes("strIngredient") && data !== "").map(([key, data]) => data);
  const amount = Object.entries(data).filter(([key, data]) => key.includes("strMeasure") && data !== "").map(([key, data]) => data);

  const combinedArray = ingredients.map((key, index) => [key, amount[index]]);

  return(
    <section className="flex flex-col items-center justify-center">
      <div className="relative w-full h-72 lg:h-96 max-w-xl sm:mt-6">
        <h2 className="absolute bottom-0 z-10 w-full text-center bg-[#45D1F4] bg-opacity-80 text-2xl p-1 lg:text-3xl">{data.strMeal}</h2>
        <img className="h-72 lg:h-96 w-full object-cover relative z-0" alt={'imagen de' + data.strMeal} src={data.strMealThumb} />
      </div>
      <div className="pt-2">
        <p className="sm: text-2xl lg:text-3xl">{data.strArea}, {data.strCategory}</p>
      </div>
      <div className="mt-3 sm:flex sm:flex-col sm:px-3 sm:justify-center sm:items-center sm:max-w-5xl lg:flex-row">
        <div className="flex flex-col w-72 items-center justify-evenly bg-white shadow-[#091A1E] shadow border border-[#45D1F4] rounded mb-4 md:mr-4">
          <p className="p-1 border-b text-2xl">Ingredients</p>
          <ul className="flex flex-col justify-evenly h-full w-72">
            {
              combinedArray.map((ingredient, key) => (
                <li key={key} className="flex items-center border-b w-full text-center text-sm p-1">
                  <p className="w-1/2">
                    {ingredient[0]}
                  </p>
                  <p className="w-1/2">
                    {ingredient[1]}
                  </p>
                </li>
              ))
            }
          </ul>
        </div>
          <div className="flex flex-col mb-2 w-72 items-start h-full p-1 border border-[#45D1F4] rounded bg-white text-2xl shadow-[#091A1E] shadow sm:w-auto ">
            <h3 className=" border-b">Instructions</h3>
              <p className="text-sm mt-2 lg:text-base">{data.strInstructions}
              </p>
          </div>
      </div>
    </section>
  );
};