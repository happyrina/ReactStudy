import styles from '../../styles/Hotel.module.css'

function Hotel(props) {
  return (
    <div>
      <img src={props.hotelImg} className={styles.hotelImg}></img>
      <div>
        <div className={styles.hotelName}>{props.hotelName}</div>
        <div className={styles.hotelPrice}>{props.hotelPrice}</div>
      </div>
      {props.isSale ? <div>할인중</div> : null}
    </div>
  )
}

export default Hotel

//붕어빵 틀
