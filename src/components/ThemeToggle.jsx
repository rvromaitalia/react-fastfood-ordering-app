function ThemeToggle({ darkMode, setDarkMode }) {
  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="form-check form-switch">
      <input
        id="themeSwitch"
        type="checkbox"
        className="form-check-input"
        checked={darkMode}
        onChange={handleChange}
      />

      <label className="form-check-label" htmlFor="themeSwitch">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </label>
    </div>
  );
}

export default ThemeToggle;