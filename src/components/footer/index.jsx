import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './index.scss'
export default class Footer extends Component {
  render() {
    return (
        <div className="footer">
              <NavLink exact className="active" to={'/'}>
                  <i className='iconfont icon-changyonglogo40'></i>
                  <span>首页</span>
              </NavLink>
              <NavLink to={'/find'}>
                  <i className='iconfont icon-faxian'></i>
                  <span>发现</span>
              </NavLink>
              <NavLink  to={'/cart'}>
                  <i className='iconfont icon-dingdan'></i>
                  <span>订单</span>
              </NavLink>
              <NavLink to={'/my'}>
                  <i className='iconfont icon-wode'></i>
                  <span>我的</span>
              </NavLink>
        </div>
    )
  }
}
