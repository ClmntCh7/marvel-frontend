const Searchbar = ({ search, setSearch }) => {
  const handleSearch = (e) => {
    return setSearch(e.target.value);
  };

  return (
    <div className="Searchbar-wraper">
      <input
        type="Searchbar-input"
        placeholder="Search..."
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
};

export default Searchbar;
