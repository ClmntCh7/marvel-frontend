import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Favorites from "./Favorites";

const CharacterCard = ({
  id,
  name,
  thumbnail,
  description,
  setCharacterId,
  // isFavorite,
  // setIsFavorite,
  myFavorites,
  setMyFavorites,
  type,
  elem,
}) => {
  // const pictureURLBuilder = () => {
  //   return "";
  // };
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div>
      <Link to={`/characters/${id}`}>
        <article className="Card-container cut-corner">
          <img
            src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
            alt=""
          />
          <div className="Card-details">
            <span>{name}</span>
            <span>{description}</span>
          </div>
        </article>
      </Link>
      <Favorites
        isFavorite={isFavorite}
        setIsFavorite={setIsFavorite}
        id={id}
        type={type}
        myFavorites={myFavorites}
        setMyFavorites={setMyFavorites}
        elem={elem}
      />
    </div>
  );
};

export default CharacterCard;
