import { Link } from "react-router-dom";

const ComicsCard = ({ id, name, thumbnail }) => {
  // const pictureURLBuilder = () => {
  //   return "";
  // };
  // console.log(thumbnail);
  // console.log(name);
  //   console.log(
  //     `${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`
  //   );
  return (
    <Link to={`/comic/${id}`}>
      <article className="Card-container">
        <img
          src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
          alt=""
        />
        {/* <div>
        <span>{name}</span>
      </div> */}
      </article>
    </Link>
  );
};

export default ComicsCard;
