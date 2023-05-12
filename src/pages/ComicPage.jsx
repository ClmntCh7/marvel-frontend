import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";

const ComicPage = () => {
  const { comicId } = useParams();
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comic/${comicId}`
        );

        console.log(response);
        setdata(response.data);
        console.log(data.name);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [comicId]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    // <Link to={`/characters/${id}`}>
    <article className="Card-container-large cut-corner">
      <img
        className="Card-background"
        src={`${data.thumbnail.path}/portrait_incredible.${data.thumbnail.extension}`}
        alt=""
      />
      <div className="Card-wrapper">
        <div className="Card-container cut-corner">
          <img
            src={`${data.thumbnail.path}/portrait_uncanny.${data.thumbnail.extension}`}
            alt=""
          />
        </div>
        <div className="Card-details-wrapper">
          <h2>{data.name}</h2>
          <span>{data.description}</span>
        </div>
      </div>
    </article>
    // </Link>
  );
};

export default ComicPage;
