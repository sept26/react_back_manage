import React from 'react'
import { Menu, Icon} from 'antd'
import { connect } from 'react-redux'
import './sideBar.less'
const SubMenu = Menu.SubMenu
class SideBar extends React.Component {
  state = {
    menus: [
      {
        icon: 'home',
        index: '1',
        title: '系统首页'
      },
      {
        icon: 'appstore',
        index: '2',
        title: '基础表格'
      },
      {
        icon: 'table',
        index: '3',
        title: 'tab选项卡'
      },
      {
        icon: 'calendar',
        title: '表单相关',
        index: 'sub1',
        subs: [
          {
            index: '4',
            title: '基本表单'
          },
          {
            title: '三级菜单',
            index: 'sub1-1',
            subs: [
              {
                index: '5',
                title: '富文本编辑器'
              },
              {
                index: '6',
                title: 'markdown编辑器'
              }
            ]
          },
          {
            index: '7',
            title: '文件上传'
          }
        ]
      },
      {
        icon: 'form',
        index: '8',
        title: '自定义图标'
      },
      {
        icon: 'bar-chart',
        index: '9',
        title: 'schart图表'
      },
      {
        icon: 'drag',
        title: '拖拽组件',
        index:'sub2',
        subs: [
          {
            index: '10',
            title: '拖拽列表'
          },
          {
            index: '11',
            title: '拖拽弹框'
          }
        ]
      },
      {
        icon: 'warning',
        title: '错误处理',
        index: 'sub3',
        subs: [
          {
            index: '12',
            title: '权限测试'
          },
          {
            index: '13',
            title: '404页面'
          }
        ]
      }
    ]
  }

  menuCircle = (menus = this.state.menus) => {
    return (
      menus.map((item) => {
        if(item.subs && Array.isArray(item.subs)) {
          return (
            <SubMenu key={item.index} title={item.icon ? <span><Icon type={item.icon} /><span>{item.title}</span></span> : <span>{item.title}</span>}>
              {this.menuCircle(item.subs)}
            </SubMenu>
          )
        } else {
          return (
          <Menu.Item key={item.index}>{item.icon ? <span><Icon type={item.icon}/><span>{item.title}</span></span> : <span>{item.title}</span>}</Menu.Item>
          )
        }
      })
    )
  }

  render() {
    return (
      <main className="side-bar-container" style={{width:256}}>
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={this.props.collapse}
        >
          {
            this.menuCircle(this.state.menus)
          }  
        </Menu>
      </main>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     collapse: state.collapse
//   }
// }

export default connect(state =>({collapse: state.collapse}))(SideBar)