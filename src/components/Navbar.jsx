import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav className="nav flex justify-evenly flex-wrap items-center">
        <div>
          <img src="Logo.png" alt="" srcset="" />
        </div>
        <Link to="/home">Home</Link>
        {/* <Link to="/">Products</Link> */}
        <a href="">Products</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">FAQs</a>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Serach"
            className="rounded-md py-2 px-1"
          />
          <Link className="icons" to="/cart">
            <img src="Cart.png" alt="" />
          </Link>
          <div className="icons">
            <img src="Notification.png" alt="" />
          </div>
        </div>
      </nav>
    </>
  );
};
