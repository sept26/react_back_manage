import React from 'react'
import {Form, Icon, Input, Button} from 'antd'
import { withRouter } from "react-router-dom"
import PropTypes from 'prop-types'
import './login.less'

const FormItem = Form.Item
class Login extends React.Component {
  static propTypes = {
    from: PropTypes.object,
    getFieldDecorator: PropTypes.object
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, value) => {
      if(err) {
        console.log('登录失败')
      } else {
        localStorage.setItem('userName', value.userName)
        this.props.history.push('/')
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <main className="login-container">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem hasFeedback>
            {getFieldDecorator('userName', {
              rules:[{required: true, message: '请输入用户名'}]
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
            )}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules:[{required: true,min: 6, max: 16, message: '密码为6-16个字符'}]
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"/>
            )}
          </FormItem>
          <FormItem style={{marginBottom:0}}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </FormItem>
        </Form>
      </main>
    )
  }
}
const WrappedNormalLoginForm = Form.create()(Login)

export default withRouter(WrappedNormalLoginForm)