import React, { Component } from 'react'
import './index.scss'
import { Carousel} from 'antd';
import Axios from 'axios'
import {Link} from 'react-router-dom'
export default class Promotion extends Component {

    state={
        list:[]
    }
    componentDidMount(){
        Axios.get('http://47.100.98.54:9019/api/promotion')
            .then((res)=>{
                // console.log(res.data.data)
                this.setState({
                    list:res.data.data
                })
            })
    }
    render() {
        return (
            <div className='promotion'>
                <Carousel effect="fade">
                    {
                        this.state.list.length>0 && this.state.list.map((item,index)=>{
                            return(
                                <div className='item' key={index}>
                                    <Link to={'/promotion/sub'+index}>
                                        <img src={item.img} alt={''}/>
                                    </Link>
                                </div>
                            )
                        })
                    }
 
                    {/* <div className='item'>
                        <a href="#">
                        <img src={require("../../static/img/promotion/1.webp")} alt=""/>
                        </a>
                    </div>
                    <div className='item'>
                        <a href="#">
                            <img src={require("../../static/img/promotion/2.webp")} alt=""/>                          
                        </a>
                    </div>
                    <div className='item'>
                        <a href="#">
                            <img src={require("../../static/img/promotion/3.webp")} alt=""/>                          
                        </a>
                    </div>
                    <div className='item'>
                        <a href="#">
                            <img src={require("../../static/img/promotion/4.webp")} alt=""/>                          
                        </a>
                    </div>
                    <div className='item'>
                        <a href="#">
                            <img src={require("../../static/img/promotion/5.webp")} alt=""/>                          
                        </a>   
                    </div>              */}
                </Carousel>
            </div>
        )
    }
}