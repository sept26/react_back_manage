import React from 'react'
import { Tooltip, Icon, Menu, Dropdown } from 'antd'
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { collapseControl } from '@/store/home/actions'
import PropTypes from 'prop-types'
import './topBar.less'

class TopBar extends React.Component {
  state = {
    fullscreen: false,
    userName: ''
  }
  static propTypes = {
    collapse: PropTypes.bool.isRequired
  }
  componentWillMount() {
    const userName = localStorage.getItem('userName')
    this.setState(() => {
      return {userName}
    })
  }
  handleFullScreen = () => {
    let element = document.documentElement
    if (this.state.fullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      }
    }
    this.setState(() => {
      return {fullscreen: !this.state.fullscreen}
    })
  }
  handleMenuClick = (e) => {
    if (e.key === '1') {
      localStorage.removeItem('userName')
      this.props.history.push('/login')
    }
  }
  changeCollapse = () => {
    const state = !this.props.collapse
    this.props.collapseControl(state)
  }
  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">退出登录</Menu.Item>
      </Menu>
    )
    return (
      <main className="top-bar-container">
        <div className="top-bar-container-left">
          后台管理系统
        </div>

        <div className="top-bar-container-right">
          <div className="scale-btn" onClick={this.changeCollapse}>
            {
              this.props.collapse ? <Icon type="menu-unfold" /> : <Icon type="menu-fold" />
            }
            
          </div>
          <div className="top-bar-left" onClick={this.handleFullScreen}>
          <Tooltip placement="bottom" title={this.state.fullscreen ? '' : '全屏'}>
            {
              this.state.fullscreen ? <Icon type="fullscreen-exit" /> : <Icon type="fullscreen" />
            }
          </Tooltip>
          </div>
          <div className="top-bar-right" >
              <Dropdown overlay={menu}>
                <div className="top-bar-right-content">
                  <span>{this.state.userName}</span>&nbsp;<Icon type="down" />
                </div>
              </Dropdown>
          </div>
        </div>
      </main>
    )
  }
}

export default withRouter(connect(state => ({
  collapse: state.collapse
}),{
  collapseControl
})(TopBar))
