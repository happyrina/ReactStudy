import { useEffect, useState } from 'react'
import Form from './components/Form'
import List from './components/List'

const data = [
  {
    tag: '#동남아 #남태평양 #유럽여행',
    title: '지금 바로 떠나는 \n 해외 바캉스 특가',
    img: 'https://mobile.busan.com/nas/wcms/wcms_data/photos/2019/07/24/2019072418301331319_l.jpg',
    destination: '해외',
    moreLink: 'https://triple.guide/hotels',
  },
]

function App() {
  const [banners, setBanners] = useState(() => {
    return JSON.parse(localStorage.getItem('banners') ?? '[]')
  })

  useEffect(() => {
    localStorage.setItem('banners', JSON.stringify(banners))
  }, [banners])

  const handleAddBanner = (자식한테받은값) => {
    console.log('자식한테받은값', 자식한테받은값)
    setBanners([자식한테받은값, ...banners])
  }
  return (
    <div>
      <Form onAddBanner={handleAddBanner} />
      <List banners={banners} />
    </div>
  )
}

export default App
