import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/header";
import Featured from "../../components/featured/featured";
import PropertyList from "../../components/propertyList/propertyList";
import Popular from "../../components/popular/popular";
import Mail from "../../components/mail/Mail";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle"> Browse Properties</h1>
        <PropertyList />
        <h1 className="homeTitle"> Popular Stays</h1>
        <Popular />
        <Mail />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
