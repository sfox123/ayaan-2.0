"use client";
import styles from "./Loader.module.css";
import loading from "@/../public/lottie/loading.json";
import React from "react";
import LottieAnimation from "../Lottie";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <LottieAnimation file={loading} />
    </div>
  );
};

export default Loader;
