import React from "react";
import styles from "./SideAbout.module.css";
import ServiceCard from "./ServiceCard";
import sideImg from "../assets/sideImg.png";
import sideImg2 from "../assets/sideImg2.png";
import sideImg3 from "../assets/sideImg3.png";

const SideAbout: React.FC = () => {
  const data = [
    {
      title: "Tax Preparation & Filing",
      description:
        "Accurately prepare and file personal and business tax returns to maximize deductions and ensure compliance.",
      tags: ["1099 taxes", "Dependents", "Trust Taxes"],
      image: sideImg,
    },
    {
      title: "IRS Audit Assistance",
      description:
        "Offer expert guidance and representation to resolve tax audits and disputes with confidence.",
      tags: ["1099 taxes", "Dependents", "Trust Taxes"],
      image: sideImg2,
    },
    {
      title: "Bookkeeping & Accounting",
      description:
        "Maintain organized financial records and provide clear reports to support business growth and financial health.",
      tags: ["1099 taxes", "Dependents", "Trust Taxes"],
      image: sideImg3,
    },
  ];

  return (
    <section className={styles.section}>
      {data.map((item, index) => (
        <div
          key={index}
          className={`${styles.rowWrapper} ${
            index % 2 === 1 ? styles.alignRight : styles.alignLeft
          }`}
        >
          <ServiceCard {...item} reversed={index % 2 === 1} />
        </div>
      ))}
    </section>
  );
};

export default SideAbout;
