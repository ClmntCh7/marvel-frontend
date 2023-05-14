const Favorites = ({ myFavorites, setMyFavorites, id, type, elem }) => {
  const handleFavorites = ({ id, type, elem }) => {
    const findFavorite = myFavorites.find((elem) => {
      return elem._id === id || null;
    });
    if (!findFavorite) {
      elem.type = type;
      console.log("isPushed");
      const newFavorites = [...myFavorites];
      newFavorites.push(elem);
      setMyFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      console.log("is Removed");
      const newFavorites = [...myFavorites];
      const index = newFavorites.indexOf(findFavorite);
      newFavorites.splice(index, 1);
      setMyFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };
  const isFavorite = myFavorites.some((elem) => {
    return elem._id === id;
  });

  return (
    <div className="Favorite-buttonBlock">
      <button
        className={isFavorite ? "Favorite-RemoveButton" : "Favorite-AddButton"}
        onClick={() => {
          handleFavorites({
            myFavorites,
            setMyFavorites,
            id,
            type,
            elem,
          });
        }}
        value={isFavorite}
      >
        {isFavorite ? "Remove favory" : "Add favory"}
      </button>
    </div>
  );
};

export default Favorites;
