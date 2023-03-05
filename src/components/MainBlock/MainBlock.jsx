import styles from "./MainBlock.module.css";

const MainBlock = () => {
  return (
    <div className={styles["main-block"]}>
      <div className={styles["content"]}>
        <h1>
          The future of freelancing starts <strong>here.</strong>
        </h1>
        <h3>Stay tuned.</h3>
      </div>
      <div className={styles["image-block"]} />
      <div className={styles["tab-image-block"]} />
      <div className={styles["mobile-image-block"]} />
    </div>
  );
};

export default MainBlock;
