import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './index.scss'
export default class Fixtop extends Component {
  render() {
    return (
        <div className="fixtop">
            <Link to={'/search'}>
                <i className=' iconfont icon-search-1-copy'></i>
                <span>搜素饿了么商家，商品名称</span>
            </Link>        
        </div>
    )
  }
}
