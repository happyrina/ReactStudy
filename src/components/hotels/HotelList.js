import Hotel from './Hotel'
import styles from '../styles/Hotel.module.css'

function HotelList({ title, data }) {
  return (
    <div>
      <div className={styles.hotelListTitle}>{title}</div>
      <div className={styles.HotelListContainer}>
        {data.map((hotel, index) => {
          return (
            <Hotel
              key={index}
              hotelImg={hotel.hotelImg}
              hotelName={hotel.hotelName}
              hotelPrice={hotel.hotelPrice}
              isSale={false}
            ></Hotel>
          )
        })}
      </div>
    </div>
  )
}

export default HotelList

//만든 붕어빵 틀에 재료 넣기
