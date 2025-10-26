import Button from "./Button"
import img from "../assets/image.png"
import styles from "./FinanceBanner.module.css"

const FinanceBanner = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Financial Clarity You <br /> Can Trust
        </h1>
        <p className={styles.subtitle}>
          Trusted financial guidance for every stage of life and business since 1987
        </p>
        <Button className={styles.connectBtn}>Connect with our experts</Button>
      </div>

      <div className={styles.imageWrapper}>
        <img src={img} alt="Globe illustration" />
      </div>
    </section>
  )
}

export default FinanceBanner
