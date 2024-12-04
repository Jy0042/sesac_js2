import { useTheme } from "./ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav
      className={`navbar navbar-expand-sm ${
        isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My CRM
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              User
            </a>
            <a className="nav-link" href="#">
              Order
            </a>
            <a className="nav-link" href="#">
              Order Item
            </a>
            <a className="nav-link" href="#">
              Item
            </a>
            <a className="nav-link" href="#">
              Store
            </a>
          </div>
          <button
            id="theme-toggle"
            type="button"
            className="btn bg-secondary text-light"
            onClick={toggleTheme}
          >
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
