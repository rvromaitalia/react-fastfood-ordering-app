import ThemeToggle from "./ThemeToggle";

function Header({ darkMode, setDarkMode }) {
  return (
    <div className="row mb-4 align-items-center">
      <div className="col">
        <h2>Fast Food Ordering App</h2>
      </div>

      <div className="col text-end">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}

export default Header;