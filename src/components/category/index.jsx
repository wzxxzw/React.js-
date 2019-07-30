import React, { Component } from 'react'
import { Carousel} from 'antd';
import{ Link} from 'react-router-dom';
import './index.scss'

import Axios from "axios"
export default class Category extends Component {

    state={
            category:[]
        }
    componentDidMount() {
        Axios.get('http://47.100.98.54:9019/api/category')
            .then((res)=>{
                // console.log(res.data)
                // const category = res.data.data
                this.setState({
                    category:res.data.data
                })
            })
    }

    render() {
        return (
            <div className='category'>
                <Carousel effect="fade">
                    <div className='item'>
                        {
                          this.state.category.length>0 && this.state.category.map((item,index)=>{
                            if( index>=10 ){return false}
                              return(
                                <Link key={item.id} to={`/categorylist${index}`}>
                                    <img src={item.img} alt=""/>
                                    <span>{item.title}</span>
                                </Link>
                              )
                          })
                        }

                        {/* <Link to={'/categorylist1'}>
                            <img src={require("../../static/img/category/1.webp")} alt=""/>
                            <span>美食</span>
                        </Link>
                        <a href="#">
                            <img src={require("../../static/img/category/2.webp")} alt=""/>
                            <span>商超便利</span>
                        </a>
                        <a href="#">
                            <img src={require("../../static/img/category/3.webp")} alt=""/>
                            <span>午餐</span>
                        </a>
                        <a href="#">
                            <img src={require("../../static/img/category/4.webp")} alt=""/>
                            <span>水果</span>
                        </a>
                        <a href="#">
                            <img src={require("../../static/img/category/5.webp")} alt=""/>
                            <span>医药健康</span>
                        </a>
                        <a href="#">
                            <img src={require("../../static/img/category/6.webp")} alt=""/>
                            <span>浪漫鲜花</span>
                        </a>
                        <a href="#">
                            <img src={require("../../static/img/category/7.webp")} alt=""/>
                            <span>厨房生鲜</span>
                        </a>
                        <a href="#">
                            <img src={require("../../static/img/category/8.webp")} alt=""/>
                            <span>地方小吃</span>
                        </a>
                        <a href="#">
                            <img src={require("../../static/img/category/9.webp")} alt=""/>
                            <span>签到领红包</span>
                        </a>
                        <a href="#">
                            <img src={require("../../static/img/category/10.webp")} alt=""/>
                            <span>地方菜系</span>
                        </a> */}
                    </div>

                    <div className='item'>
                    {
                        this.state.category.length>0 && this.state.category.map((item,index)=>{
                            if(index<10){
                                return false
                            }
                            return(
                                <Link key={item.id} to={`/categorylist${index}`}>
                                    <img src={item.img} alt=""/>
                                    <span>{item.title}</span>
                                </Link>
                            )
                        })
                    }
                    </div>
                </Carousel>
            </div>
        )
    }
    }

