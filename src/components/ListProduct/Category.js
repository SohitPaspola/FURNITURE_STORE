import List from "./List";
import classes from "./Category.module.css";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom";

const Category = () => {
  const params = useParams();
  const location = useLocation();

  const products = useSelector((state) => state.product.products);
  const searchedProducts = useSelector(
    (state) => state.search.searchedProducts
  );
  const filteredData = products.filter(
    (item) => item.category === params.productCategory
  );
  const data = searchedProducts.length !== 0 ? searchedProducts : filteredData;

  return (
    <div className={classes.furniture}>
      <Header></Header>
      <h2 className={classes.pathname}>{location.pathname}</h2>

      <div className={classes.category}>
        {data.map((item) => (
          <List
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            category={item.category}
            image={item.image}
          ></List>
        ))}
      </div>
    </div>
  );
};

export default Category;
