import Banner from './Banner'

function List({ banners }) {
  return (
    <div>
      List
      <div>
        {banners.map((지금값, index) => {
          return (
            <Banner
              key={index}
              tag={지금값.tag}
              title={지금값.title}
              img={지금값.img}
              destination={지금값.destination}
              moreLink={지금값.moreLink}
              backgroundColor={지금값.backgroundColor}
            />
          )
        })}
      </div>
    </div>
  )
}

export default List
