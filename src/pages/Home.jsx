import axios from "axios";
import { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import Searchbar from "../components/Searchbar";
import { useLocation } from "react-router";

const Home = ({
  setCharacterId,
  search,
  setSearch,
  myFavorites,
  setMyFavorites,
}) => {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setpageNumber] = useState();
  const [pageToSkip, setpageToSkip] = useState("");
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/characters?name=${search}&${
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
        localStorage.setItem("favorites", JSON.stringify(myFavorites));
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    getData();
  }, [pageToSkip, search, myFavorites]);
  useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem("favorites")) || null;
    setMyFavorites(favorite);
  }, [setMyFavorites]);

  // console.log(location);
  location.state = { elemType: "character" };

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="Home-wrapper">
      <Searchbar search={search} setSearch={setSearch} />
      <div className="Home-characterCard-wrapper">
        {data.map((elem) => {
          return (
            <div key={elem._id}>
              <CharacterCard
                elem={elem}
                id={elem._id}
                name={elem.name}
                description={elem.description}
                thumbnail={elem.thumbnail}
                setCharacterId={setCharacterId}
                type={location.state.elemType}
                myFavorites={myFavorites}
                setMyFavorites={setMyFavorites}
              />
            </div>
          );
        })}
      </div>
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
  );
};

export default Home;
