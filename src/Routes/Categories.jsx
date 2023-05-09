import { Link, useParams } from 'react-router-dom';
import PopularIngredients from '../Componentes/PopularIngredients'
import useCategories from '../Hooks/useCategories';

export default function Ingredients() {

  const dataCategories = useCategories();

  if (!dataCategories) {
    return <div className="flex h-screen justify-center items-center text-3xl">Loading...</div>;
  };

  const categories = dataCategories.filter(category => (category.strCategory !== 'Beef' && category.strCategory !== 'Chicken'));

  return(
    <>
    <PopularIngredients />
      <section className='flex flex-col items-center w-full z-10'>
        <h2 className='w-1/2 text-base text-center my-5 bg-[#45D1F4] bg-opacity-60 rounded sm:text-2xl xl:text-3xl'>Categories</h2>
        <ul className='grid grid-cols-2 gap-5 w-full justify-items-center text-center p-8 sm:grid-cols-3 lg:grid-cols-4'>
          {
          categories.map(category => (
            <li className='relative' key={category.idCategory}>
              <Link to={`/appderecetas/Categories/${category.strCategory}`}>
                <img className='rounded object-fill bg-white max-h-72' alt={'Imagen de' + category.strCategory} src={category.strCategoryThumb} />
                <p className='py-1 text absolute bottom-0 bg-opacity-80 bg-[#45D1F4] w-full rounded-b'>{category.strCategory}</p>
              </Link>
            </li>
          ))
          }
        </ul>
      </section>
    </>
  )
}