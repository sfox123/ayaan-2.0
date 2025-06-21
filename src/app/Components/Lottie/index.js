import React from "react";
import styles from "./Lottie.module.css";
import Lottie from "lottie-react";

const LottieAnimation = ({ file }) => {
  return (
    <div className={styles.loadingContainer}>
      <Lottie
        width={300}
        height={150}
        animationData={file}
        autoPlay={true}
        loop={true}
      />
    </div>
  );
};

export default LottieAnimation;
