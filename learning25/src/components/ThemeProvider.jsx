import { useSelector } from "react-redux";
import "../styles.css";

const ThemeProvider = ({ children }) => {
  const theme = useSelector((state) => state.theme.theme);

  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
