import "./footer.css";

const Footer = () => {
  return (
    <div className="footContain">
      <div className="footList">
        <ul className="fList">
          <li className="fItem"> Newfoundland</li>
          <li className="fItem"> Labrador</li>
          <li className="fItem"> Cities</li>
          <li className="fItem"> Towns</li>
          <li className="fItem"> Airports</li>
          <li className="fItem"> Hotels</li>
        </ul>
        <ul className="fList">
          <li className="fItem"> Air BnB's</li>
          <li className="fItem"> Cabins</li>
          <li className="fItem"> Villas</li>
          <li className="fItem"> Motels</li>
        </ul>
        <ul className="fList">
          <li className="fItem"> Activites</li>
          <li className="fItem"> Holiday Deals</li>
          <li className="fItem"> Car Rentals</li>
          <li className="fItem"> Restuarants</li>
          <li className="fItem"> Local Favourites</li>
        </ul>
        <ul className="fList">
          <li className="fItem"> Customer Service</li>
          <li className="fItem"> Contact Us</li>
          <li className="fItem"> Reviews</li>
          <li className="fItem"> Terms & Conditions</li>
          <div className="fText">Copyright © 2022 NFLDtravel</div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
