import React, { Component } from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
import Axios from 'axios'


export default class Scarebuy extends Component {
    state={
        scarelist:[]
    }
    componentDidMount (){
        Axios.get('http://47.100.98.54:9019/api/scarebuy')
            .then((res)=>{
                // console.log(res.data.data)
                this.setState({
                    scarelist:res.data.data
                })
            })
    } 

    render() {
            return (
                <div className="scarebuy">

                    {
                        this.state.scarelist.length >0 && this.state.scarelist.map((item,index)=>{
                            // console.log(item)
                            return(
                                <Link key={index} to={'/scarebuy/sub'+item.id}>
                                    <img src={item.img} alt={item.title}/>
                                </Link>
                            )
                        })
                    }
                    {/* <a href="#">
                        <img src={require('../../static/img/scarebuy/1.png')} alt=""/>
                    </a>
                    <a href="#" >
                        <img src={require('../../static/img/scarebuy/2.png')} alt=""/>
                    </a> */}
                </div> 
            )
        }
    } 