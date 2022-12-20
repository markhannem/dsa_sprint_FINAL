import "./Search.css";
import { Link } from "react-router-dom";
import htl1 from "../popular/imgs/htl1.png";

const Search = ({ item }) => {
  return (
    <div className="srchItem">
      <img src={htl1} alt="" className="srchImg" />
      {/* Need to find out how to upload/fetch pictures to database */}
      {/* <img src={item.photos[0]} alt="" className="srchImg" /> */}
      <div className="srchDesc">
        <h1 className="srchTitle">{item.name}</h1>
        <span className="srchDis">{item.distance}</span>
        <span className="srchSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="srchFeatures">{item.desc}</span>
        <span className="srchCancel">Free cancellation </span>
        <span className="srchCancel2">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="srchDetails">
        {item.rating && (
          <div className="srchRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="srchText">
          <span className="srchPrice">$CAD {item.cheapestPrice}</span>
          <span className="srchTax">Includes all taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="srchCheck">See Availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
