import "./index.css";

const Header = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <header className="header-container">
      <p>good morning venkatesh</p>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Mode</button>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s"
        alt="profile"
        className="profile-image"
      />
    </header>
  );
};

export default Header;
