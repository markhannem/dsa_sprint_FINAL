import "./Mail.css";

const Mail = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Sign up to get the best deals first!</h1>
      <div className="mailInput">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Mail;
