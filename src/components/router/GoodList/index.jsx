import React, { Component } from 'react'
// import { Icon,Input } from 'antd';
import Header from '../../header/index.jsx'
import './index.scss'
import Arrow from "../../back";

import Axios from 'axios'
export default class GoodList extends Component {
    state={
        list:{},
        product:[]
    }
    componentDidMount (){
        const id= this.props.match.params.id
        Axios.get('http://47.100.98.54:9019/api/detail/'+id)
            .then((res)=>{
                console.log(res)
                this.setState({
                    list:res.data,
                    product:res.data.product
                })
            })
    }
    render() {
        const  list= this.state.list;
        const product =this.state.product;       
        return (
            <div className={'shopList'}>
                        {/*<Link to={'/'} className={'back iconfont icon-arrow1'}></Link>*/}
                        <Arrow></Arrow>
                        <div className={'shopContent'}>
                            <div className={'hd'}>
                                <div className={'shopIcon'}>
                                    <img src={list.img} alt=""/>
                                </div>
                            </div>

                            <div className={'shopTitle'}>
                                <div className={'title'}>{list.title}</div>
                                <div className={'comment'}>
                                    <span>评价{list.averageScore}</span>
                                    <span>月销3333单</span>
                                    <span>峰鸟快送{list.foodTime}分钟</span>
                                </div>
                                <div className={'cash'}>
                                    <img src={require('./img/money.png')} alt=""/>
                                </div>
                                <div className={'newuser'}>
                                    <span className={'first'}>首单</span>
                                    <span className={'userReduce'}>新用户下单立减14元(不与其它活动同享)</span>
                                    <span className={'discount'}>10个优惠</span>
                                </div>
                                <div className={'tip'}>
                                    公告：餐厅是我的事业，口味是我的职业。您的满意是我们的追求。呷不腻烧烤欢迎您。
                                </div>
                            </div>

                            <div className={'foodlist'}>

                                {
                                    product.map((item,index)=>{
                                        return(
                                            <ul key={index}>
                                                {
                                                    item.list.map((item,index)=>{
                                                       return( <li key={index}>
                                                            <div className={'foodIcon'}>
                                                                <img src={item.img} alt={''}/>
                                                            </div>
                                                            <div className={'foodInfo'}>
                                                                <div className={'info'}>
                                                                    <p className={'title'}>{item.foodTitle} </p>
                                                                    <p className={'mainMaterial'}>主要原料: {item.fooddescription}</p>
                                                                    <p className={'goodComment'}>
                                                                        <span>月售{item.foodsale}份</span>
                                                                        <span>好评率98%</span>
                                                                    </p>
                                                                </div>
                                                                <div className={'price'}>
                                                                    <div className={'money'}>￥9</div>
                                                                    <div className={'addOrReduce'}>
                                                                        <span className={'remove iconfont icon-jianshao'}></span>
                                                                        <span className={'num'}>1</span>
                                                                        <span className={'add iconfont icon-zengjia'}></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                       )
                                                    })
                                                }
                                                
                                            </ul> 
                                        )
                                    })
                                }

                                
                            </div>
                        </div>

                        <div className={'buyCart'}>
                            <div className={'cart'}>
                                <div className={'cartIcon iconfont icon-qicheqianlian-'}>
                                    <span className={'num'}>1</span>
                                </div>

                                <div className={'countPrice'}>￥<span>100</span></div>
                            </div>

                            <a href={'#'} className={'buy'}>去结算</a>
                        </div>
            </div>
        )
    }
}
