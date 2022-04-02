import classes from "./Explore.module.css";
import sofa from "../../Icons/icons8-sofa-80.png";
import chair from "../../Icons/icons8-chair-80.png";
import table from "../../Icons/icons8-table-80.png";
import storage from "../../Icons/icons8-closet-80.png";
import bookshelf from "../../Icons/icons8-book-shelf-80.png";
import bed from "../../Icons/icons8-empty-bed-80.png";
import all from "../../Icons/icons8-select-all-80.png";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className={classes.explore}>
      <h2>Explore Our Furniture</h2>
      <div className={classes.underline}></div>
      <div className={classes.icons}>
        <Link to="/category/sofas">
          <div className={classes.item}>
            <img src={sofa} alt="sofas"></img>
            <span className={classes.caption}>Sofas</span>
          </div>
        </Link>

        <Link to="/category/sofas">
          <div className={classes.item}>
            <img src={chair} alt="chair"></img>
            <span className={classes.caption}>Chair</span>
          </div>
        </Link>

        <Link to="/category/sofas">
          <div className={classes.item}>
            <img src={table} alt="table"></img>
            <span className={classes.caption}>Table</span>
          </div>
        </Link>

        <Link to="/category/sofas">
          <div className={classes.item}>
            <img src={storage} alt="storage"></img>
            <span className={classes.caption}>storage</span>
          </div>
        </Link>

        <Link to="/category/sofas">
          <div className={classes.item}>
            <img src={bookshelf} alt="Bookshelves"></img>
            <span className={classes.caption}>Bookshelves</span>
          </div>
        </Link>

        <Link to=".category/sofas">
          <div className={classes.item}>
            <img src={bed} alt="bed"></img>
            <span className={classes.caption}>Bed</span>
          </div>
        </Link>

        <Link to="/category/sofas">
          <div className={classes.item}>
            <img src={all} alt="all products"></img>
            <span className={classes.caption}>All Furniture</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
