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
import ViewAllBtn from './components/common/ViewAllBtn'
import BannerList from './components/banner/BannerList'
import IconContainer from './components/common/IconContainer'
import TravelList from './components/travel/TravelList'

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
        isSale: true,
      },
      {
        hotelImg:
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/38554503-be9c-4c58-a295-11b3e02ff4b1',
        hotelName: '코토 노 카신',
        hotelPrice: '295,741원',
        isSale: false,
      },
    ],
  }
  const 일본호텔데이터 = {
    title: '해외 단독 특가 호텔 모음',
    data: [
      {
        hotelImg:
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/3bff200f-6475-43ab-8f06-6868411195f6',
        hotelName: '소테츠 그랜드 프레사 오사카 - 난바',
        hotelPrice: '82,218원',
        isSale: false,
      },
      {
        hotelImg:
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/1277d180-a367-4a2b-af47-b411a64cf824',
        hotelName: '도미 인 프리미엄 남바 내추럴 핫 스프링',
        hotelPrice: '145,000',
        isSale: true,
      },
    ],
  }

  const 배너데이터 = {
    bannerdata: [
      {
        tag: '얼리버드 혜택 3만원 추가 할인',
        title: '대만여행 인기 숙소 \n 실시간 특가 모음',
        img: 'https://mblogthumb-phinf.pstatic.net/20161021_45/suni2park_1476994150025NCJxK_JPEG/%B4%EB%B8%B81.01.jpg?type=w800',
        destination: '해외',
        moreLink: '#',
        backgroundColor: '#FF6565',
      },
    ],
  }
  const 여행추천데이터 = {
    title: '추천 여행지',
    data: [
      {
        travelImg:
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/bf76a583-ea00-4fb0-a066-74bb850d19c1',
        travelName: '제주',
      },
      {
        travelImg:
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/9cd2e606-5f35-4b10-b16d-3da669ffedaa',
        travelName: '부산',
      },
      {
        travelImg:
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/fb14faf3-7563-4a22-851a-debc9eadba58',
        travelName: '여수',
      },
      {
        travelImg:
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/97172bd4-9010-4b26-8522-1ca8845507f8',
        travelName: '강릉･속초',
      },
      {
        travelImg:
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/db0169bf-47f3-493a-ac10-6940ea8974b9',
        travelName: '가평･양평',
      },
      {
        travelImg:
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/5a92b10c-495c-47e5-bdd8-82ad71e79467',
        travelName: '경주',
      },
      {
        travelImg:
          'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/2d57cf32-094a-46c9-8cfe-932f47321209',
        travelName: '전주',
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
