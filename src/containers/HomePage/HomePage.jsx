import Header from "../../components/Header/Header";
import MainBlock from "../../components/MainBlock/MainBlock";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <Header />
      <MainBlock />
    </div>
  );
};

export default HomePage;
