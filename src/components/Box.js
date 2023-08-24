import React, { useState } from 'react'

function Box() {
  const [박스의색상, 박스의색상을바꾸는함수] = useState('orange')
  console.log('박스의색상', 박스의색상)

  return (
    <div>
      {박스의색상 === 'red' ? <h1>빨간색</h1> : null}
      <input
        onChange={(event) => {
          박스의색상을바꾸는함수(event.target.value)
        }}
      />
      <div style={{ backgroundColor: 박스의색상 }}>박스</div>
    </div>
  )
}

export default Box
