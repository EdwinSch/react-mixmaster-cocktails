import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4 style={{ textAlign: "center" }}>no matching cocktails found</h4>;
  }
  return (
    <div className="cocktail-list">
      {drinks.map((item) => {
        return <CocktailCard key={item.idDrink} {...item} />;
      })}
    </div>
  );
};

export default CocktailList;
