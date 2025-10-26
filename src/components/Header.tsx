import Button from "./Button"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>Noble Finances</p>
      <div className={styles.buttons}>
        <Button className={styles.servicesBtn}>Services</Button>
        <Button className={styles.regBtn}>Book an appointment</Button>
      </div>
    </header>
  )
}

export default Header
