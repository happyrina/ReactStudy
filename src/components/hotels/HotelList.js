import Hotel from './Hotel'

function HotelList({ title }) {
  return (
    <div>
      <div>{title}</div>
      <Hotel
        hotelImg="https://media.triple.guide/triple-cms/c_limit,f_auto,h_104,w_1024/38554503-be9c-4c58-a295-11b3e02ff4b1"
        hotelName="코토 노 카신"
        hotelPrice="295,741원"
        isSale={true}
      ></Hotel>
      <Hotel
        hotelImg="https://media.triple.guide/triple-cms/c_limit,f_auto,h_104,w_1024/38554503-be9c-4c58-a295-11b3e02ff4b1"
        hotelName="코토 노 카신"
        hotelPrice="295,741원"
        isSale={false}
      ></Hotel>
    </div>
  )
}

export default HotelList
