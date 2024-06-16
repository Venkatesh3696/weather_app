import "./index.css";

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <header className="header-container">
      <p>good morning venkatesh</p>
      <label htmlFor="toggle">toggle</label>
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
    </header>
  );
};

export default Header;
