import { Link, useOutletContext } from "react-router-dom";

const CocktailCard = ({
  idDrink,
  strAlcoholic,
  strDrink,
  strDrinkThumb,
  strGlass,
}) => {
  const data = useOutletContext();

  return (
    <article className="card">
      <figure className="img-container">
        <img src={strDrinkThumb} alt={strDrink} className="drink-img img" />
      </figure>
      <div className="footer">
        <h4>{strDrink}</h4>
        <h5>{strGlass}</h5>
        <p>{strAlcoholic}</p>
        <Link to={`/cocktail/${idDrink}`} className="btn">
          details
        </Link>
      </div>
    </article>
  );
};

export default CocktailCard;
