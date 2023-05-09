import salmonImg from '../Imagenes/salmon.jpg'
import chickenImg from '../Imagenes/chicken.jpg'
import fleshImg from '../Imagenes/flesh.jpg'
import { Link } from 'react-router-dom'
import useIngredients from '../Hooks/useIngredients'

export default function PopularIngredients(){

  const ingredients = useIngredients()

  if (!ingredients) {
    return <div className="flex h-screen justify-center items-center text-3xl">Loading...</div>;
  };

  const salmon = ingredients.filter(ingredient => ingredient.strIngredient === "Salmon");
  const chicken = ingredients.filter(ingredient => ingredient.strIngredient === "Chicken");
  const beef = ingredients.filter(ingredient => ingredient.strIngredient === "Beef");

  return(
      <section className="flex flex-col items-center justify-center bg-food h-80 text-xl">
        <h2 className='text-2xl lg:text-3xl'>Popular ingredients</h2>
        <ul className='grid grid-cols-3 w-full gap-5 items-center pt-6 px-4 lg:text-3xl'>
          <li className='h-full'>
            <Link className='flex flex-col items-center h-full' to={`/appderecetas/Ingredients/${salmon[0].strIngredient}`}>
              <img src={salmonImg} className='rounded h-full max-h-48' alt="Salmon image" />{salmon[0].strIngredient}
            </Link>
          </li>
          <li className='h-full'>
            <Link className='flex flex-col items-center h-full' to={`/appderecetas/Ingredients/${chicken[0].strIngredient}`}>
              <img src={chickenImg} className='rounded h-full max-h-48' alt="Chicken image" />{chicken[0].strIngredient}
            </Link>
          </li>
          <li className='h-full'>
            <Link className='flex flex-col items-center h-full' to={`/appderecetas/Ingredients/${beef[0].strIngredient}`}>
              <img src={fleshImg} className='rounded h-full max-h-48' alt="Beef image" />{beef[0].strIngredient}
            </Link>
          </li>
        </ul>
      </section>
  )
}