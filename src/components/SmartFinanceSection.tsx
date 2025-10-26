import React from 'react';
import styles from './SmartFinanceSection.module.css';

const SmartFinanceSection: React.FC = () => {
  return (
    <section className={styles.smartFinanceSection}>
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>Smart Finance for everyone</h2>
        <p className={styles.introText}>
          At Noble Finance, we believe that financial confidence should be accessible to everyone—whether you're a solo entrepreneur, managing a growing family, or running a small business.
        </p>
      </div>

      <div className={styles.cardsContainer}>
        {/* Card for Freelancers */}
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            {/* Placeholder for icon - replace with actual icon component or SVG */}
            <span className={styles.icon}>&#9998;</span> {/* Example: Pencil icon */}
          </div>
          <h3 className={styles.cardTitle}>For Freelancers</h3>
          <p className={styles.cardSubtitle}>Simplicity & Control</p>
          <p className={styles.cardDescription}>
            Stay in charge of your income with seamless expense tracking, automated deductions, and smart tax strategies—so you can focus on doing what you love.
          </p>
        </div>

        {/* Card for Families */}
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            {/* Placeholder for icon - replace with actual icon component or SVG */}
            <span className={styles.icon}>&#128100;</span> {/* Example: Person icon */}
          </div>
          <h3 className={styles.cardTitle}>For Families</h3>
          <p className={styles.cardSubtitle}>Stability & Security</p>
          <p className={styles.cardDescription}>
            From budgeting tools to tax-saving insights, we help you plan for the future, maximize refunds, and keep your household finances running smoothly.
          </p>
        </div>

        {/* Card for Small Businesses */}
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            {/* Placeholder for icon - replace with actual icon component or SVG */}
            <span className={styles.icon}>&#128187;</span> {/* Example: Briefcase/Desk icon */}
          </div>
          <h3 className={styles.cardTitle}>For Small Businesses</h3>
          <p className={styles.cardSubtitle}>Stability & Security</p>
          <p className={styles.cardDescription}>
            Effortless bookkeeping, payroll solutions, and expert-backed tax support—so you can spend less time on finances and more time scaling your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SmartFinanceSection;