function SearchBar() {
  return (
    <div style={{ display: 'flex' }}>
      <input
        placeholder="떠나실 도시, 지역을 검색해주세요!!"
        style={{
          padding: '7px 20px 7px 10px',
          width: '70%',
          height: '30px',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#1E90FF',
          borderRadius: '8px',
          overflow: 'hidden',
          margin: '25px 0px 0px 60px',
        }}
      ></input>
      <button
        style={{
          width: '68px',
          height: '48px',
          borderWidth: '2px',
          borderStyle: 'solid',
          backgroundColor: '#1E90FF',
          color: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          margin: '25px 0px 0px 5px',
          fontSize: '16px',
          fontWeight: '700',
          border: 'none',
        }}
      >
        검색
      </button>
    </div>
  )
}

export default SearchBar

//searchbar & searchbtn
