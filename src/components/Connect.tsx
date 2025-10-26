import Button from './Button'
import styles from './Connect.module.css'

const Connect = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        We believe that tax filing should be <br />
        seamless, accurate, and stress-free. Get <br />
        started with Noble Finance today!
      </h1>
      <Button className={styles.connectBtn}>Connect with our experts</Button>
    </section>
  )
}

export default Connect