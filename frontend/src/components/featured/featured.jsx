import "./featured.css";
import sj from "./imgs/sj_pic2.png";
import cb from "./imgs/cb_pic2.png";
import lws from "./imgs/lws_pic2.png";
// import useFetch from "../../hooks/fetch";

const Featured = () => {
  // const { data, loading, error } = useFetch(
  //   "/hotels/byCity?cities=lewisporte,corner brook,st johns"
  // );

  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={sj} alt="" className="featuredImg img1" />
        <div className="featuredTitle">
          <h1>St.John's</h1>
          {/* <h2>{data[0]} Properties</h2> */}
        </div>
      </div>
      <div className="featuredItem">
        <img src={cb} alt="" className="featuredImg img2" />
        <div className="featuredTitle">
          <h1>Corner Brook</h1>
          {/* <h2>{data[1]} Properties</h2> */}
        </div>
      </div>
      <div className="featuredItem">
        <img src={lws} alt="" className="featuredImg img3" />
        <div className="featuredTitle">
          <h1>Lewisporte</h1>
          {/* <h2>{data[2]} Properties</h2> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
