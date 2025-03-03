import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
