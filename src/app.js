// import { useEffect, useState } from 'react'
// import Form from './components/Form'
// import List from './components/List'
// import Citylist from './components/cities/CityList'
// import CityList from './components/cities/CityList'
// import HotelList from './components/hotels/HotelList'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import SearchBar from './components/common/SearchBar'
import './app.css'
import HotelList from './components/home/hotels/HotelList'
import SectionBar from './components/common/SectionBar'
import ViewAllBtn from './components/common/ViewAllBtn'
import BannerList from './components/home/banner/BannerList'
import IconContainer from './components/common/IconContainer'
import TravelList from './components/home/travel/TravelList'
import {
  해외특가호텔데이터,
  일본호텔데이터,
  배너데이터,
  여행추천데이터,
} from './data'

function App() {
  return (
    <div>
      <Header />
      <div
        className="containerWrap"
        style={{
          maxWidth: '768px',
          margin: 'auto',
        }}
      >
        <div className="mainTitle">
          호텔부터 펜션까지
          <br />
          최저가 숙소 예약
        </div>
        <SearchBar />
        <div className="bannerContianer">
          <BannerList
            className="bannerContainerWrap"
            bannerdata={배너데이터.bannerdata}
          />
        </div>
        <IconContainer />
        <TravelList title={여행추천데이터.title} data={여행추천데이터.data} />
        <SectionBar />
        <HotelList
          title={해외특가호텔데이터.title}
          data={해외특가호텔데이터.data}
        ></HotelList>
        <ViewAllBtn />
        <SectionBar />
        <HotelList
          title={일본호텔데이터.title}
          data={일본호텔데이터.data}
        ></HotelList>
        <ViewAllBtn />
        <SectionBar />
      </div>
      <Footer />
    </div>
  )
}

export default App
