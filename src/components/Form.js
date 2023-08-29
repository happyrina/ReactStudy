import { useState } from 'react'

function Form({ onAddBanner }) {
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')
  const [img, setImg] = useState('')
  const [destination, setDestination] = useState('')
  const [moreLink, setMoreLink] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('')

  const handleReset = () => {
    setTitle('')
    setTag('')
    setImg('')
    setDestination('')
    setMoreLink('')
    setBackgroundColor('')
  }

  const handleAddBanner = () => {
    if (title === '' || img === '' || destination === '') {
      window.alert('필수값들을 채워주셈')

      return
    }

    const 새로운배너 = {
      title,
      tag,
      img,
      destination,
      moreLink,
      backgroundColor,
    }
    onAddBanner(새로운배너)
  }

  return (
    <div>
      Form
      <div>
        <input
          placeholder="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <input
          placeholder="tag"
          value={tag}
          onChange={(e) => {
            setTag(e.target.value)
          }}
        />
        <input
          placeholder="img"
          value={img}
          onChange={(e) => {
            setImg(e.target.value)
          }}
        />
        <input
          placeholder="destination"
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value)
          }}
        />
        <input
          placeholder="moreLink"
          value={moreLink}
          onChange={(e) => {
            setMoreLink(e.target.value)
          }}
        />
        <input
          placeholder="backgroundColor"
          value={backgroundColor}
          onChange={(e) => {
            setBackgroundColor(e.target.value)
          }}
        />
        <button onClick={handleAddBanner}>추가</button>
        <button onClick={handleReset}>리셋</button>
      </div>
    </div>
  )
}

export default Form
