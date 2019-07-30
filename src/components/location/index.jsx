import React, { Component } from 'react'
import './index.scss'
import Axios from 'axios'
export default class Location extends Component {

        state={
            city:''
        }
        componentDidMount(){
            Axios.get('http://route.showapi.com/9-4',{
             params:{
                'showapi_appid':'70235',
                'showapi_sign':'bcf090e75fc24f63a69000f315bcd607'
                  }
            }).then((res)=>{
                // console.log(res.data.showapi_res_body.cityInfo.c3)
                this.setState({
                    city:res.data.showapi_res_body.cityInfo.c3
                })
            })
        }

        render() {
            return (
                <div className={'location'}>
                    <div className={'sub'}>
                        <span className=' iconfont icon-dingwei'></span>
                        <span>{this.state.city?this.state.city:'正在获取中...'}</span>
                        <span className=" iconfont icon-jiantou"></span>
                    </div>
                </div>
            )
        }
        }
