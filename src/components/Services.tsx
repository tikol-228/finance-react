import React from "react";
import styles from "./Services.module.css";

const Services: React.FC = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.content}>
        <p className={styles.subtitle}>Services</p>
        <h2 className={styles.title}>
          Let us handle the numbers,
          <br /> so you can handle your success.
        </h2>
        <p className={styles.description}>
          Serving individuals and small businesses since 1987
        </p>
        <button className={styles.button}>Schedule a call</button>
      </div>
    </section>
  );
};

export default Services;
