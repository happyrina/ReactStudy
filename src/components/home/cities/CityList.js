import City from './City'

function CityList({ countryName, data }) {
  return (
    <div>
      <h2>{countryName}</h2>
      {data.map((city, index) => {
        return (
          <City
            key={index}
            cityImg={city.cityImg}
            cityName={city.cityName}
            cities={city.cities}
          ></City>
        )
      })}
    </div>
  )
}

export default CityList
