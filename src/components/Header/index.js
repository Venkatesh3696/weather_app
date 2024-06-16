import "./index.css";

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <header className="header-container">
      <h1>Weather App</h1>
      <div className="container">
        <label htmlFor="toggle">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </label>

        <input
          type="checkbox"
          id="toggle"
          checked={isDarkMode}
          onChange={(target) => toggleTheme(target.checked)}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s"
          alt="profile"
          className="profile-image"
        />
      </div>
    </header>
  );
};

export default Header;
