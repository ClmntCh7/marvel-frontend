import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyFavorites = ({ myFavorites, setMyFavorites }) => {
  const [comicsData, setComicsData] = useState();
  const [charData, setCharData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const favorite = localStorage.getItem("favorites");
    if (favorite) {
      setMyFavorites(JSON.parse(favorite));
    }

    // const getComics = async () => {
    //   try {
    //     const response = await axios.get(`http://localhost:3000/comic/${elem}`);
    //     return console.log(response);
    //     // const foundcomics = [...comicsData];
    //     // setComicsData(response.data);
    //     setIsLoading(false);
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };
  }, [setMyFavorites]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      {/* <Link to={`/character/${id}`}>
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
      <Link to={`/comic/${id}`}>
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
      </Link> */}
    </div>
  );
};

export default MyFavorites;
