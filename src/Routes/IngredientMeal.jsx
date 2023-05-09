import { Link, useParams } from "react-router-dom";
import PopularIngredients from "../Componentes/PopularIngredients";
import useMealsIngredient from "../Hooks/useMealsIngredient";

export default function IngredientMeal(){

  const {ingredient} = useParams()
  const mealsIngredient = useMealsIngredient(ingredient);

  if (!mealsIngredient) {
    return <div className="flex h-screen justify-center items-center text-3xl">Loading...</div>;
  };

  return(
    <>
    <PopularIngredients />
      <section className="flex flex-col items-center w-full z-10">
        <h2 className='w-1/2 text-base text-center my-5 bg-[#45D1F4] bg-opacity-60 rounded sm:text-2xl xl:text-3xl'>{ingredient}</h2>
        <ul className='grid grid-cols-2 gap-5 w-full justify-items-center text-center p-8 sm:grid-cols-3 lg:grid-cols-4'>
          {
          mealsIngredient.map(data => (
            <li className='relative' key={data.idMeal}>
              <Link to={`/${data.strMeal}`}>
                <img className='rounded object-fill max-h-72 bg-white' alt={'Imagen de' + data.strMeal} src={data.strMealThumb} />
                <p className='py-1 text absolute bottom-0 bg-opacity-80 bg-[#45D1F4] w-full rounded-b'>{data.strMeal}</p>
              </Link>
            </li>
          ))
          }
        </ul>
      </section>
    </>
  )
}