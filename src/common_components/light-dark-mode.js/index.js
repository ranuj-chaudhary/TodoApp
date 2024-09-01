import "./styles.css";
import useLocalStorage from "./useLocalStorage";

export default function LightDarkTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function handleThemeValue(e) {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <button onClick={handleThemeValue}>Change Theme</button>
    </div>
  );
}
