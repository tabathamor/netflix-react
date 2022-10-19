import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowID='1' title="UpComing" fetchURL={requests.requestUpcoming}/>
        <Row rowID='2' title="Top" fetchURL={requests.requestTopRated}/>
        <Row rowID='3' title="Trening Now" fetchURL={requests.requestTrending}/>
        <Row rowID='4'  title="Horror" fetchURL={requests.requestHorror}/>
    </div>
  )
}

export default Home