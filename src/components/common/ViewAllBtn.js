function ViewAllBtn() {
  return (
    <div
      style={{
        paddingTop: '20px',
        paddingLeft: '30px',
        paddingRight: '30px',
        float: 'none',
        textAlign: 'center',
      }}
    >
      <button
        style={{
          backgroundColor: 'rgba(54, 143, 255, 0.1)',
          color: 'rgba(54, 143, 255, 1)',
          width: '100%',
          height: '45px',
          borderRadius: '4px',
          textAlign: 'center',
          display: 'block',
          border: 'none',
          fontWeight: 'bold',
          fontSize: '14px',
          margin: '0px 0px 10px',
        }}
      >
        전체 보기
      </button>
      <div
        style={{
          overflow: 'break-word',
          color: 'rgba(58, 58, 58, 0.3)',
          fontWeight: '500',
          fontSize: '12px',
          whiteSpace: 'pre-line',
          lineHeight: 1.2,
          textAlign: 'center',
        }}
      >
        10.12 - 10.13, 성인2 (1박당, 세금포함 가격)
      </div>
    </div>
  )
}

export default ViewAllBtn
