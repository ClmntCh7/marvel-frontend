import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CharacterPage = () => {
  const { characterId } = useParams();
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--m4snx7ydrpgs.code.run/comics/${characterId}`
          // `http://localhost:3000/comics/${characterId}`
        );
        console.log(data);
        setdata(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [characterId]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
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
      <div className="Card-comics-container">
        {data.comics.map((elem, index) => {
          return (
            <div className="Card-comics" key={elem._id}>
              <Link to={`/comic/${elem._id}`}>
                <img
                  src={`${elem.thumbnail.path}/portrait_xlarge.${elem.thumbnail.extension}`}
                  alt=""
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterPage;
