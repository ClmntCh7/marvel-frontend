import { useState } from "react";

const handleFavorites = ({
  isFavorite,
  setIsFavorite,
  myFavorites,
  setMyFavorites,
  id,
  type,
}) => {
  const findFavorite = myFavorites.find((elem) => {
    return elem?.id === id;
  });
  if (!findFavorite) {
    console.log("isPushed");
    const newFavorites = [...myFavorites];
    setIsFavorite(true);
    newFavorites.push({ id: id, isFavorite: isFavorite, type: type });
    setMyFavorites(newFavorites);
    localStorage.setItem("Favorites", JSON.stringify(newFavorites));
  } else {
    console.log("is Removed");
    setIsFavorite(false);
    const newFavorites = [...myFavorites];
    const index = newFavorites.indexOf(findFavorite);
    newFavorites.splice(index, 1);
    setMyFavorites(newFavorites);
    localStorage.setItem("Favorites", JSON.stringify(newFavorites));
  }
};

const Favorites = ({
  isFavorite,
  setIsFavorite,
  myFavorites,
  setMyFavorites,
  id,
  type,
  elem,
}) => {
  //   console.log(myFavorites.find(elem));
  return (
    <div className="Favorite-buttonBlock">
      {!isFavorite ? (
        <button
          className="Favorite-AddButton"
          onClick={() => {
            handleFavorites({
              isFavorite,
              setIsFavorite,
              myFavorites,
              setMyFavorites,
              id,
              type,
            });
          }}
          value={isFavorite}
        >
          Add favory
        </button>
      ) : (
        <button
          className="Favorite-RemoveButton"
          onClick={() => {
            handleFavorites({
              isFavorite,
              setIsFavorite,
              myFavorites,
              setMyFavorites,
              id,
              type,
            });
          }}
          value={isFavorite}
        >
          Remove favory
        </button>
      )}
    </div>
  );
};

export default Favorites;
