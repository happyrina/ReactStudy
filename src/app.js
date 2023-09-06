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
import HotelList from './components/hotels/HotelList'
import SectionBar from './components/common/SectionBar'

// const data = [
//   {
//     tag: '#동남아 #남태평양 #유럽여행',
//     title: '지금 바로 떠나는 \n 해외 바캉스 특가',
//     img: 'https://mobile.busan.com/nas/wcms/wcms_data/photos/2019/07/24/2019072418301331319_l.jpg',
//     destination: '해외',
//     moreLink: 'https://triple.guide/hotels',
//   },
// ]

function App() {
  // const [banners, setBanners] = useState(() => {
  //   return JSON.parse(localStorage.getItem('banners') ?? '[]')
  // })

  // useEffect(() => {
  //   localStorage.setItem('banners', JSON.stringify(banners))
  // }, [banners])

  // const handleAddBanner = (자식한테받은값) => {
  //   console.log('자식한테받은값', 자식한테받은값)
  //   setBanners([자식한테받은값, ...banners])
  // }

  // const 일본데이터 = {
  //   countryName: '일본',
  //   data: [
  //     {
  //       cityImg:
  //         'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/255ba179-2542-4701-8b23-d2d26daa4e13.jpeg',
  //       cityName: '도쿄',
  //       cities: '도쿄, 하코네, 요코하마, 가마쿠라',
  //     },
  //     {
  //       cityImg:
  //         'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/732cf1a8-93dd-4af4-a782-2547d6a0d4b7.jpeg',
  //       cityName: '후쿠오카',
  //       cities: '후쿠오카, 유후인, 벳푸, 기타큐슈',
  //     },
  //   ],
  // }
  // const 동남아데이터 = {
  //   countryName: '동남아시아',
  //   data: [
  //     {
  //       cityImg:
  //         'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/592f1f3c-487a-4ed9-a496-87e8f7d8bde9.jpeg',
  //       cityName: '나트랑',
  //       cities: '나트랑',
  //     },
  //     {
  //       cityImg:
  //         'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/4ce39095-a808-4d53-8307-78ad9b647478.jpeg',
  //       cityName: '마닐라',
  //       cities: '마닐라, 바탕가스',
  //     },
  //   ],
  // }

  const 해외특가호텔데이터 = {
    title: '해외 단독 특가 호텔 모음',
    data: [
      {
        hotelImg:
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/4dbb6ec8-bd14-4afe-80e7-f381f1ebb6a0',
        hotelName: '이스틴 그랜드 호텔 사톤 방콕 - SHA Extra Plus',
        hotelPrice: '129,877원',
        isSale: 'true',
      },
      {
        hotelImg:
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/38554503-be9c-4c58-a295-11b3e02ff4b1',
        hotelName: '코토 노 카신',
        hotelPrice: '295,741원',
        isSale: 'true',
      },
    ],
  }

  return (
    // <div>
    //   <CityList
    //     countryName={일본데이터.countryName}
    //     data={일본데이터.data}
    //   ></CityList>
    //   <CityList
    //     countryName={동남아데이터.countryName}
    //     data={동남아데이터.data}
    //   ></CityList>
    // </div>

    <div>
      <Header />
      <div className="mainTitle">
        호텔부터 펜션까지
        <br />
        최저가 숙소 예약
      </div>
      <SearchBar />
      <SectionBar />
      <HotelList
        title={해외특가호텔데이터.title}
        data={해외특가호텔데이터.data}
      ></HotelList>
      <Footer />
    </div>
  )
}

export default App
