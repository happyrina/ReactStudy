import styles from '../styles/Travel.module.css'

function Travel({ travelImg, travelName }) {
  return (
    <div className={styles.TravelContainer}>
      <div className={styles.TravelContainerWrap}>
        <div className={styles.TravelImg}>
          <img src={travelImg} />
        </div>
        <span className={styles.TravelTitle}>{travelName}</span>
      </div>
    </div>
  )
}

export default Travel
