import React from 'react'
import TopBar from './../topBar/topBar'
import SideBar from './../sideBar/sideBar'
class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <TopBar/>
        <SideBar/>
      </div>
    )
  }
}
export default Home