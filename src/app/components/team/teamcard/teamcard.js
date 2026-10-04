import styles from './component.module.css';
export default function TeamCard({ name, position, image, objectPosition }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        {image ? <img className={styles.image} src={`/${image}`} alt={name} loading="lazy" style={{ objectPosition: objectPosition || 'center' }} /> : (
          <div className={styles.placeholder} role="img" aria-label={`${name}, photo coming soon`}>
            <span aria-hidden="true">{name.charAt(0)}</span>
            <small>Photo soon</small>
          </div>
        )}
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.position}>{position}</p>
    </article>
  );
}
