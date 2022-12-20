import "./propertyList.css";
import hpic from "./imgs/hotel.png";
import apic from "./imgs/airbnb.png";
import chalpic from "./imgs/chalet.png";
import vpic from "./imgs/villa.png";
import cabpic from "./imgs/cabin.png";

const PropertyList = () => {
  return (
    <div className="propList">
      <div className="propItem">
        <img src={hpic} alt="" className="propImg" />
        <div className="propTitle">
          <h1>Hotels</h1>
          {/* <h2>150+</h2> */}
        </div>
      </div>
      <div className="propItem">
        <img src={apic} alt="" className="propImg" />
        <div className="propTitle">
          <h1>Air BnB's</h1>
          {/* <h2>250+</h2> */}
        </div>
      </div>
      <div className="propItem">
        <img src={chalpic} alt="" className="propImg" />
        <div className="propTitle">
          <h1>Chalets</h1>
          {/* <h2>70+</h2> */}
        </div>
      </div>
      <div className="propItem">
        <img src={vpic} alt="" className="propImg" />
        <div className="propTitle">
          <h1>Villas</h1>
          {/* <h2>140+</h2> */}
        </div>
      </div>
      <div className="propItem">
        <img src={cabpic} alt="" className="propImg" />
        <div className="propTitle">
          <h1>Cabins</h1>
          {/* <h2>300+</h2> */}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
