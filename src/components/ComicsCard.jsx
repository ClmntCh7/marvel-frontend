import { useEffect } from "react";
import { Link } from "react-router-dom";
import Favorites from "./Favorites";

const ComicsCard = ({
  elem,
  id,
  title,
  thumbnail,
  description,
  myFavorites,
  setMyFavorites,
  type,
}) => {
  // const pictureURLBuilder = () => {
  //   return "";
  // };
  useEffect(() => {
    const favorite = localStorage.getItem("favorites");
    if (favorite) {
      setMyFavorites(JSON.parse(favorite));
    }
  }, [setMyFavorites]);

  return (
    <div>
      <Link to={`/comic/${id}`}>
        <article className="Card-container cut-corner">
          <img
            src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
            alt=""
          />
          <div className="Card-details">
            <span>{title}</span>
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

export default ComicsCard;
