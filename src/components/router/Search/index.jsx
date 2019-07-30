import React, { Component } from 'react'
import { Icon,Input } from 'antd';
import './index.scss'
const Search1 = Input.Search;
export default class Search extends Component {
  render() {
    return (
      <div>
        <div className='header'>
            <Icon className='left' type="left" />
            <div className='search1'> 
                <Search1
                  placeholder="input search text"
                  onSearch={value => console.log(value)}
                  enterButton
                />
            </div>
        </div>
        <div className='hotSearch'>热门搜索</div>
        <div className='hotFood'>
            <span>豆</span>
            <span>煎饼</span>  
            <span>炸鸡</span>  
            <span>臭豆腐</span>    
            <span>蛋糕</span>  
            <span>炒饭</span>  
            <span>粉</span>  
            <span>蛋炒饭</span>     
            <span>粥</span>  
            <span>烧烤</span>   
        </div>

      </div>
    )
  }
}
