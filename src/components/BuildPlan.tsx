import Button from './Button'
import styles from './BuildPlan.module.css'
import img from '../assets/planImg.png'

const BuildPlan = () => {
  return (
    <section className={styles.buildPlan}>
      <div className={styles.textBlock}>
        <h3 className={styles.title}>A custom built plan for you</h3>
        <p className={styles.description}>
          At Noble Finances, we believe that tax filing should be seamless, 
          accurate, and stress-free. Our approach is centered on three key 
          pillars: simplicity, accuracy, and security.
        </p>
        <Button className={styles.learnMoreBtn}>Learn More</Button>
      </div>

      <div className={styles.imageBlock}>
        <img src={img} alt="plan" className={styles.image}/>
      </div>
    </section>
  )
}

export default BuildPlan
