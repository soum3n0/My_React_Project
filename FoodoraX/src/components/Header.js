import { LOGO_URL } from "../Utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = ({setSearchText}) => {
  //for my login logout section
  const [isLogin, setIsLogin] = useState(false);
  const changeState = () => {
    setIsLogin(!isLogin);
  };

  //for my search section
  const [searchName, setSearchName] = useState("");

  return (
    <div className="header">
      {/* logo */}

      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      {/* search  */}
      <div className="search-section flex flex-btn">
        <input
          type="text"
          placeholder="Search..."
          className="search-box"
          value={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setSearchText(searchName);
          }}
          className="btn"
        >
          search
        </button>
      </div>

      <ul className="nav-items">
      <Link to={"/"} className="link-style"><li>Home</li></Link>
      <Link to={"/About"} className="link-style"><li>About us</li></Link>
      <Link to={"/Contact"} className="link-style"><li>contact us</li></Link>

        <li className="logo-sec">
          <img
            className="chart-logo"
            src="https://i.pinimg.com/originals/53/a0/fd/53a0fdd351674e0794ada73267f0fa33.png"
          ></img>
        </li>
        <li>
          <button onClick={changeState}>
            {" "}
            {isLogin ? "Login" : "Logout"}{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
