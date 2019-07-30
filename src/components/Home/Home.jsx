import React, { Component } from 'react';
import './index.scss'
import Location from '../location/index.jsx'
import Fixtop from '../fixtop/index.jsx'
import Category from '../category/index.jsx'
import Scarebuy from '../scarebuy/index.jsx'
import Promotion from '../promotion/index.jsx'
import Recommend from '../recommend/index.jsx'
import GoodsList from '../goodlist/index.jsx'
import Footer from '../footer/index.jsx'
import Menu from '../menu/index.jsx'

import Axios from 'axios'
export default class Home extends Component {
  state={
      list:[]
  }
  componentDidMount(){
    Axios .get('http://47.100.98.54:9019/api/shoplist')
      .then((res)=>{
        this.setState({
          list:res.data.data
        })
      })
  }
  render() {
    return (
      <div className={'app'}>
           { 
             //这是定位
           }
            <Location/>

          {
            //  吸顶盒
          }
          <Fixtop/>
          {
            // 这是分类导航
          }
          <Category/>
          {
            //这是抢购
          }
          <Scarebuy/>
          {
            //促销
          }
          <Promotion/>
          {
            //商家推荐
          }
          <Recommend/>
          <Menu/>
         {
           //商品列表
         }
          <GoodsList list={this.state.list}/>
          {
            //页面底部
          }
          <Footer/>

      </div>
    )
  }
}
