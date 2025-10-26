import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h3 className={styles.title}>Noble Finances</h3>
          <p className={styles.description}>
            Financial Clarity You Can Trust <br />
            Trusted financial guidance for every stage of life and business since 1987
          </p>
        </div>
        <div className={styles.rightColumn}>
          <ul className={styles.servicesList}>
            <li className={styles.serviceItem}>Services</li>
            <li className={styles.serviceItem}>
              <button className={styles.bookAppointmentButton}>Book An Appointment</button>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2023 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;