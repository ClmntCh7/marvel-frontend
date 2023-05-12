import { useEffect, useState } from "react";
import ComicsCard from "../components/ComicsCard";
import axios from "axios";
import Pagination from "../components/Pagination";
import Searchbar from "../components/Searchbar";

const Comics = ({ search, setSearch }) => {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setpageNumber] = useState();
  const [pageToSkip, setpageToSkip] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics?title=${search}&${
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
        // const { _id, name, description, thumbnail } = results;

        // console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [pageToSkip, search]);
  console.log(search);
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
                id={elem._id}
                name={elem.name}
                desciption={elem.description}
                thumbnail={elem.thumbnail}
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
