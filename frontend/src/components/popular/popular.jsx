import "./popular.css";
import htl1 from "./imgs/htl1.png";
import useFetch from "../../hooks/fetch";

const Popular = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  return (
    <div className="popular">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="pItem" key={item._id}>
              <img src={htl1} alt="" className="pImg" />
              {/* Need to find out how to upload/fetch pictures to database */}
              {/* <img src={item.photos[0]} alt="" className="pImg" /> */}
              <span className="pName">{item.name}</span>
              <span className="pCity">{item.city}</span>
              <span className="pPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="pRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Popular;
