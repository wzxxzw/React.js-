import React, { Component } from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
import Axios from 'axios'



export default class PromotionSub extends Component {

    state={
        list:{}
    }
    componentDidMount(){
        console.log(this.props)
        const id =this.props.match.params.id
        Axios.get('http://47.100.98.54:9019/api/promotionSub')
            .then((res)=>{
                
                this.setState({
                    list:res.data.data[id]
                })
            })
    }
    render() {
        // console.log(this.props)
            return (
              <div className={'promotionSub'}>
                  <img src={this.state.list.img} width={'100%'} height={'100%'}/>
              </div>
            )          
        }
    } 