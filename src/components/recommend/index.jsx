import React, { Component } from 'react'
import './index.scss'

export default class Recommend extends Component {
  render() {
    return (
        <div >
            <div className='recommend'>
              <div> <img src={require('../../static/img/recommend/1.jpg')} alt=""/></div>
            </div>
        </div>
    )
  }
}