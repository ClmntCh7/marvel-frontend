import axios from "axios";
import { useEffect, useState } from "react";
import ComicsCard from "../components/ComicsCard";
import Pagination from "../components/Pagination";
import Searchbar from "../components/Searchbar";
import { useLocation } from "react-router";

const Comics = ({ search, setSearch, myFavorites, setMyFavorites }) => {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setpageNumber] = useState();
  const [pageToSkip, setpageToSkip] = useState("");
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--m4snx7ydrpgs.code.run/comics?title=${search}&${
            // `http://localhost:3000/comics?title=${search}&${
            pageToSkip ? pageToSkip : ""
          }`
        );

        const { results, count } = response.data;

        const funcPageNumber = (count) => {
          const pageNumber = Math.ceil(count / 100);

          let paginationButtons = [];
          for (let i = 0; i < pageNumber; i++) {
            paginationButtons.push(i + 1);
          }
          setpageNumber(paginationButtons);
          return paginationButtons;
        };
        funcPageNumber(count);

        setdata(results);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [pageToSkip, search, myFavorites]);

  // console.log(location);
  location.state = { elemType: "comic" };

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="Home-wrapper">
      <Searchbar search={search} setSearch={setSearch} />
      <div className="Home-characterCard-wrapper">
        {data.map((elem) => {
          return (
            <div key={elem._id}>
              <ComicsCard
                elem={elem}
                id={elem._id}
                title={elem.title}
                desciption={elem.description}
                thumbnail={elem.thumbnail}
                type={location.state.elemType}
                myFavorites={myFavorites}
                setMyFavorites={setMyFavorites}
              />
            </div>
          );
        })}
        <div className="Pagination">
          {pageNumber.map((elem, index) => {
            return (
              <Pagination
                key={index}
                pageNumber={elem}
                pageToSkip={pageToSkip}
                setpageToSkip={setpageToSkip}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Comics;
