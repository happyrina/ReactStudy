function Hotel(props) {
  console.log(props)
  return (
    <div>
      <img src={props.hotelImg}></img>
      <div>
        <div>{props.hotelName}</div>
        <div>{props.hotelPrice}</div>
      </div>
      {props.isSale ? <div>할인중</div> : null}
    </div>
  )
}

export default Hotel
