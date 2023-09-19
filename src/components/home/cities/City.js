function City({ cityImg, cityName, cities }) {
  return (
    <div>
      <img src={cityImg} />
      <div>
        <div>{cityName}</div>
        <div>{cities}</div>
      </div>
    </div>
  )
}

export default City
