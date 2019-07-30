import React, { Component } from 'react'
import './index.scss'

export default class Menu extends Component {
  render() {
    return (
        <div >
            <div className='menu'>
              <ul>
                <li>综合排序 <i className=' jiantou iconfont icon-jiantou'></i></li>
                <li>距离最近</li>
                <li>品质联盟</li>
                <li>筛选</li>
              </ul>
            </div>
        </div>
    )
  }
}