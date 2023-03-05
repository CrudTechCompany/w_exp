import styles from "./MainBlock.module.css";
import desk_image from "../../assets/desk_image.svg";

const MainBlock = () => {
  return (
    <div className={styles["main-block"]}>
      <div className={styles["content"]}>
        <h1>
          The future of freelancing starts <strong>here.</strong>
        </h1>
        <h3>Stay tuned.</h3>
      </div>
      <div className={styles["image-block"]}>
        <img src={desk_image} alt="" />
      </div>
    </div>
  );
};

export default MainBlock;
