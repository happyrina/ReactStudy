import React from 'react'
import ReactDOM from 'react-dom/client'

import Box from './components/Box'
import RankListItem from './components/RankListItem'

const root = document.getElementById('app')

const data = [
  {
    rank: 1,
    title: 'Super Shy',
    singer: '뉴진스',
    imageUrl:
      'https://i.namu.wiki/i/wrWOftbH09kzkxQAu6oLODje3kbkPD7U2VZntoGvAM-vn-RooTNigvVUyY3JYSlij1Idmq2tBdJXx0JL9qOoPQ.gif',
  },
  {
    rank: 2,
    title: 'Seven',
    singer: '정국',
    imageUrl:
      'https://i.namu.wiki/i/wrWOftbH09kzkxQAu6oLODje3kbkPD7U2VZntoGvAM-vn-RooTNigvVUyY3JYSlij1Idmq2tBdJXx0JL9qOoPQ.gif',
  },
  {
    rank: 3,
    title: 'ETA',
    singer: '뉴진스',
    imageUrl:
      'https://i.namu.wiki/i/wrWOftbH09kzkxQAu6oLODje3kbkPD7U2VZntoGvAM-vn-RooTNigvVUyY3JYSlij1Idmq2tBdJXx0JL9qOoPQ.gif',
  },
  {
    rank: 4,
    title: '헤어지자말해요',
    singer: '박재정',
    imageUrl:
      'https://i.namu.wiki/i/wrWOftbH09kzkxQAu6oLODje3kbkPD7U2VZntoGvAM-vn-RooTNigvVUyY3JYSlij1Idmq2tBdJXx0JL9qOoPQ.gif',
  },
  {
    rank: 5,
    title: '퀸카',
    singer: '아이들',
    imageUrl:
      'https://i.namu.wiki/i/wrWOftbH09kzkxQAu6oLODje3kbkPD7U2VZntoGvAM-vn-RooTNigvVUyY3JYSlij1Idmq2tBdJXx0JL9qOoPQ.gif',
  },
]

ReactDOM.createRoot(root).render(
  <div>
    {data.map((지금값) => {
      return (
        <RankListItem
          key={지금값.rank}
          rank={지금값.rank}
          title={지금값.title}
          singer={지금값.singer}
        />
      )
    })}
  </div>,
)
