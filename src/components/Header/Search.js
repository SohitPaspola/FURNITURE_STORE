import { useState } from "react";
import classes from "./Search.module.css";
import search from "../../Icons/search.png";
import { searchActions } from "../../store/reducer/searchReducer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Search = () => {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.products);

  const searchHandler = (event) => {
    event.preventDefault();

    if (searchInput.trim() !== "") {
      dispatch(searchActions.searchData());
      const filteredProduct = allProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(searchInput) ||
          product.category.toLowerCase().includes(searchInput)
      );
      if (filteredProduct !== null) {
        dispatch(searchActions.searchDataSuccess(filteredProduct));
        history.push(`/category/search/${searchInput}`);
      } else {
        dispatch(searchActions.searchProductsFailed("no products found"));
      }
    }
    setSearchInput("");
  };

  return (
    <form className={classes["header-input"]} onSubmit={searchHandler}>
      <input
        value={searchInput}
        type="text"
        placeholder="Search"
        onChange={(event) => setSearchInput(event.target.value.toLowerCase())}
      ></input>
      <button type="submit" className={classes["search-button"]}>
        <img
          src={search}
          alt="search img"
          className={classes["search-image"]}
        ></img>
      </button>
    </form>
  );
};

export default Search;
