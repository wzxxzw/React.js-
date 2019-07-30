import React, { Component } from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
import Axios from 'axios'


export default class ScarebuySub extends Component {

    state={
        list:{}
    }
    componentDidMount () {
       const id = this.props.match.params.id
       Axios.get('http://47.100.98.54:9019/api/scarebuySub')
            .then((res)=>{
                // console.log(res.data.data)
                this.setState({
                    list:res.data.data[id]
                })
            })
    }
    render() {
        // console.log(this.props)
            return (
                <div className="ScarebuySub">
                    <img src={this.state.list.img} width={'100%'} height={'100%'} alt=""/>
                </div> 
            )          
        }
    } 