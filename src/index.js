import React from 'react'
import ReactDOM from 'react-dom/client'

import Banner from './components/Banner'

const root = document.getElementById('app')

const data = [
  {
    tag: '#동남아 #남태평양 #유럽여행',
    title: '지금 바로 떠나는 \n 해외 바캉스 특가',
    img: 'https://mobile.busan.com/nas/wcms/wcms_data/photos/2019/07/24/2019072418301331319_l.jpg',
    destination: '해외',
    more: '모아보기 +',
  },
]

ReactDOM.createRoot(root).render(
  <div>
    {data.map((지금값) => {
      return (
        <Banner
          tag={지금값.tag}
          title={지금값.title}
          img={지금값.img}
          img2={지금값.img2}
          destination={지금값.destination}
          more={지금값.more}
        />
      )
    })}
  </div>,
)
