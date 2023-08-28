function RankLisItem({ rank, title, singer }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ fontSize: 24, color: '#7eb62d', width: 30 }}>{rank}</div>
      <div>전날대비 순위</div>d
      <div>
        <img
          src="https://i.namu.wiki/i/wrWOftbH09kzkxQAu6oLODje3kbkPD7U2VZntoGvAM-vn-RooTNigvVUyY3JYSlij1Idmq2tBdJXx0JL9qOoPQ.gif"
          width={48}
          height={48}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>{title}</span>
          <span>{singer}</span>
        </div>
      </div>
    </div>
  )
}

export default RankLisItem
