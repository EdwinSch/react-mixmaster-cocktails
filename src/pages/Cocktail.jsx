import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);

  return { id, data };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();
  const singleDrink = data.drinks[0];
  // console.log(singleDrink);

  const {
    strAlcoholic,
    strDrink,
    strDrinkThumb,
    strGlass,
    strCategory,
    strInstructions,
  } = singleDrink;

  // Filter valid ingredients list from API
  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);
  // console.log(validIngredients);

  return (
    <>
      <header className="page-header">
        <Link to="/" className="btn">
          back to home
        </Link>
        <h3>{strDrink}</h3>
      </header>
      <div className="drink">
        <img src={strDrinkThumb} alt={strDrink} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {strDrink}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {strCategory}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {strGlass}
          </p>

          {/* map ingredients START */}
          <p>
            <span className="drink-data">ingredients: </span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={index}>
                  {item} {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          {/* map ingredients END */}

          <p>
            <span className="drink-data">instructions: </span>
            {strInstructions}
          </p>
        </div>
      </div>
    </>
  );
};

export default Cocktail;
