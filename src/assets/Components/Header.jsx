import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to={"/"}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
            alt="logo pokemon"
          />
        </Link>
      </div>
      <div>
        <Link to={"/pokemons"} className="menu">
          Pokemons
        </Link>
        <Link to={"/type"} className="menu">
          Types
        </Link>
      </div>
    </header>
  );
};

export default Header;
