import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header>
      <a href="/" className="Logo">
        <h1>MyBlog</h1>
      </a>
      <nav className="registration">
        <Link to="/login">Login</Link>
        <Link to="/">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
