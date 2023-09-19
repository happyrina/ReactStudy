import Banner from './Banner'

function BannerList({ bannerdata }) {
  return (
    <div>
      <div>
        {bannerdata.map((banner, index) => {
          return (
            <Banner
              key={index}
              tag={banner.tag}
              title={banner.title}
              img={banner.img}
              destination={banner.destination}
              moreLink={banner.moreLink}
              backgroundColor={banner.backgroundColor}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BannerList
