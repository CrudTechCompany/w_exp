import styles from "./Header.module.css";
import logo from "../../assets/header_logo.svg";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["content"]}>
        <img src={logo} alt="" />
      </div>
    </header>
  );
};

export default Header;
