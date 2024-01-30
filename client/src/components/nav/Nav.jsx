import "./Nav.css";
import wave from "../../assets/wave.png";
import banner from "../../assets/banner.png";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <h1>Music Wave</h1>
        <img src={wave} alt="Ola" />
        <div className="search">
          <label htmlFor="search">Search song</label>
          <input
            autoComplete="off"
            id="search"
            type="search"
            name="search"
            placeholder="Enter song title..."
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
