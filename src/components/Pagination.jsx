const handleChangingPage = ({ e, setpageToSkip }) => {
  setpageToSkip("skip=" + (e.target.value - 1) * 100);
  console.log("skip=" + e.target.value * 100);
};

const Pagination = ({ pageNumber, setpageToSkip }) => {
  return (
    <div>
      <button
        name={pageNumber}
        onClick={(e) => {
          handleChangingPage({ e, setpageToSkip });
        }}
        className="pagination-button"
        value={pageNumber}
      >
        {pageNumber}
      </button>
    </div>
  );
};

export default Pagination;
