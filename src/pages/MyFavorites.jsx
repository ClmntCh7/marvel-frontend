import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyFavorites = ({ myFavorites, setMyFavorites }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(myFavorites));
  }, [myFavorites]);

  useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem("favorites")) || [];
    setMyFavorites(favorite);
    setIsLoading(false);
  }, [setMyFavorites]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : myFavorites.length > 0 ? (
    <div className="Favorite-wrapper">
      <h2>Favorite comics</h2>
      <div className="Favorite-container">
        {myFavorites.map((elem) => {
          if (elem.type === "character") {
            return (
              <div key={elem._id}>
                <Link to={`/character/${elem._id}`}>
                  <article className="Card-container cut-corner">
                    <img
                      src={`${elem.thumbnail.path}/portrait_uncanny.${elem.thumbnail.extension}`}
                      alt=""
                    />
                    <div className="Card-details">
                      <span>{elem.name}</span>
                      <span>{elem.description}</span>
                    </div>
                  </article>
                </Link>
              </div>
            );
          }
        })}
      </div>
      <div>
        <h2>Favorite comics</h2>
        <div className="Favorite-container">
          {myFavorites.map((elem) => {
            if (elem.type === "comic") {
              return (
                <div key={elem._id}>
                  <Link to={`/comic/${elem.id}`}>
                    <article className="Card-container cut-corner">
                      <img
                        src={`${elem.thumbnail.path}/portrait_uncanny.${elem.thumbnail.extension}`}
                        alt=""
                      />
                      <div className="Card-details">
                        <span>{elem.title}</span>
                        <span>{elem.description}</span>
                      </div>
                    </article>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  ) : (
    <span>pas de fav</span>
  );
};

export default MyFavorites;
