import Filters from "./Filters";
const SearchBox = (props) => {
  const { handleClick,buttonText} = props;

  return (
    <div className="search-box">
      <div>
        <label htmlFor="input">Search: </label>
        <input type="text" placeholder="Search Items"></input>
      </div>

      <Filters handleClick={handleClick} buttonText={buttonText}/>
    </div>
  );
};
export default SearchBox;
