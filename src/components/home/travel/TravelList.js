import Travel from './travel'
import styles from '../../styles/Travel.module.css'

function TravelList({ title, data }) {
  return (
    <div>
      <div className={styles.TravelListTitle}>{title}</div>
      <div className={styles.TravelContainer}>
        {data.map((travel, index) => {
          return (
            <Travel
              key={index}
              travelImg={travel.travelImg}
              travelName={travel.travelName}
            ></Travel>
          )
        })}
      </div>
    </div>
  )
}

export default TravelList
