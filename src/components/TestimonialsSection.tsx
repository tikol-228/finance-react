import React, { useState } from 'react';
import styles from './TestimonialsSection.module.css';

interface Client {
  id: number;
  role: string;
  location: string;
}

interface Testimonial {
  id: number;
  clientId: number;
  quote: string;
  clientName: string;
  clientAge: number;
  clientAvatarQuote: string;
}

// === МОКОВЫЕ ДАННЫЕ (только три клиента и три отзыва) ===
const clients: Client[] = [
  { id: 101, role: 'Graphic Designer', location: 'Ontario, Canada' },
  { id: 102, role: 'Commercial Photographer', location: 'Ontario, Canada' },
  { id: 103, role: 'Stylist', location: 'Austin, Texas' },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    clientId: 101,
    quote: "Managing my taxes as a freelancer used to be overwhelming, but Noble Finance made it effortless. Their platform is intuitive and their support team is always ready to help. Highly recommend!",
    clientName: "Taylor M.",
    clientAge: 28,
    clientAvatarQuote: "/avatars/quote_avatar_taylor.png",
  },
  {
    id: 2,
    clientId: 102,
    quote: "Noble Finance transformed how I handle my business finances, freeing up valuable time for my passion projects. The automated expense tracking is a game-changer for commercial photographers like me.",
    clientName: "Alex P.",
    clientAge: 35,
    clientAvatarQuote: "/avatars/quote_avatar_alex.png",
  },
  {
    id: 3,
    clientId: 103,
    quote: "As a stylist, my income stream can be unpredictable. Their guidance brought stability and peace of mind, allowing me to focus more on my craft and less on financial stress.",
    clientName: "Sarah K.",
    clientAge: 31,
    clientAvatarQuote: "/avatars/quote_avatar_sarah.png",
  },
];
// === КОНЕЦ МОКОВЫХ ДАННЫХ ===

const TestimonialsSection: React.FC = () => {
  const [activeClientId, setActiveClientId] = useState<number>(clients[0].id);
  const activeTestimonial = testimonials.find(t => t.clientId === activeClientId) || testimonials[0];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>Hear From Our Happy Clients</h2>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.clientsList}>
          {clients.map(client => (
            <div
              key={client.id}
              className={`${styles.clientItem} ${client.id === activeClientId ? styles.active : ''}`}
              onClick={() => setActiveClientId(client.id)}
              role="button"
              tabIndex={0}
              aria-pressed={client.id === activeClientId}
              aria-label={`View testimonial from ${client.role}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveClientId(client.id);
                }
              }}
            >
              <h3 className={styles.clientRole}>{client.role}</h3>
              <p className={styles.clientLocation}>{client.location}</p>
            </div>
          ))}
        </div>

        <div key={activeTestimonial.id} className={styles.testimonialCard}>
          <p className={styles.quote}>"{activeTestimonial.quote}"</p>
          <div className={styles.clientInfo}>
            <div>
              <p className={styles.testimonialClientName}>{activeTestimonial.clientName}</p>
              <p className={styles.testimonialClientAge}>{activeTestimonial.clientAge} years old</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
