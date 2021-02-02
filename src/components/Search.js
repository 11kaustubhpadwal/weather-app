import "../css/search.css";

const Search = () => {
  return (
    <div className="grid-container-search">
      <div className="grid-item-search-1">
        <input type="text" placeholder="e.g. warsaw"></input>
      </div>
      <div className="grid-item-search-2">
        <button>Show me the weather!</button>
      </div>
    </div>
  );
};

export default Search;
