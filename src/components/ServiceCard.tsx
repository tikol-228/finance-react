import React from "react";
import styles from "./SideAbout.module.css";

interface ServiceCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  reversed?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  tags,
  image,
  reversed,
}) => {
  return (
    <div
      className={`${styles.card} ${reversed ? styles.reversed : ""}`}
    >
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
