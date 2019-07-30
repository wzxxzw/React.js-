import React, { Component } from 'react'
import { Icon,Input } from 'antd';
import './index.scss'

export default class Header extends Component {
  state={
    cate: ['美食','甜品饮品','商超便利','预定早餐','果蔬生鲜','新店特惠','准时达','晚餐','汉堡薯条','包子粥店','鲜花蛋糕','麻辣烫','川香菜','披萨意面','异国料理']
  }
  componentDidMount(){
    console.log(this.props.match)
  }
  render() {
    return (
      <div>
             <div className={'head'}>
                        <div className={'back iconfont icon-xiazai6'}></div>
                        <div className={'title'}>美食</div>
            </div>
      </div>
    )
  }
}
