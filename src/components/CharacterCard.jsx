import { useEffect } from "react";
import { Link } from "react-router-dom";
import Favorites from "./Favorites";

const CharacterCard = ({
  elem,
  id,
  name,
  thumbnail,
  description,
  myFavorites,
  setMyFavorites,
  type,
}) => {
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(myFavorites));
  }, [myFavorites]);

  useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem("favorites")) || [];
    setMyFavorites(favorite);
  }, [setMyFavorites]);

  // }, [setMyFavorites]);
  // const pictureURLBuilder = () => {
  //   return "";
  // };

  return (
    <div>
      <Link to={`/character/${id}`}>
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
