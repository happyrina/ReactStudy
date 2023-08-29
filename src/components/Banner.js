function Banner({
  tag,
  title,
  img,
  bgColor,
  destination,
  moreLink,
  backgroundColor,
}) {
  return (
    <div
      style={{
        width: 'auto',
        display: 'flex',
        float: 'left',
        overflow: 'hidden',
        whitespace: 'nowrap',
      }}
    >
      <div
        style={{
          backgroundColor: backgroundColor || '#00AAFF',
          width: 400,
          height: 180,
          borderRadius: 17,
          padding: 17,
          position: 'relative',
          overflow: 'hidden',
          margin: 10,
        }}
      >
        {bgColor}
        <div
          style={{
            width: 220,
            height: 20,
            textAlign: 'center',
            color: 'white',
            fontSize: 18,
            marginBottom: 15,
            marginTop: 20,
            marginLeft: 10,
            fontWeight: 400,
          }}
        >
          {tag}
        </div>
        <div
          style={{
            width: 300,
            height: 100,
            color: 'white',
            whiteSpace: 'pre-line',
            fontSize: 28,
            fontWeight: 700,
            marginLeft: 10,
            marginBottom: 15,
            letterSpacing: 1.5,
          }}
        >
          {title}
        </div>
        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: 150,
            backgroundColor: 'red',
            position: 'absolute',
            right: 25,
            top: 30,
            zIndex: 1,
            overflow: 'hidden',
            backgroundSize: 'cover',
          }}
        >
          <img
            src={img}
            alt="imglogo"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div
          style={{
            width: 30,
            height: 15,
            border: '1px solid white',
            color: 'white',
            borderRadius: 4,
            padding: 5,
            marginLeft: 10,
            position: 'absolute',
            bottom: 20,
          }}
        >
          {destination}
        </div>
        {moreLink != null ? (
          <div
            style={{
              width: 90,
              height: 25,
              backgroundColor: 'rgb(0, 0, 0, 0.5',
              color: 'white',
              zIndex: 3,
              position: 'relative',
              left: 300,
              bottom: 15,
              borderRadius: 20,
              textAlign: 'center',
              lineHeight: 1.8,
              padding: 2,
            }}
          >
            <a href={moreLink} target="_blank" rel="noreferrer">
              모아보기 +
            </a>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Banner
