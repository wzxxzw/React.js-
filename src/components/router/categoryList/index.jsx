import React, {Component} from 'react';
import   Menu from '../../menu/index.jsx'
import GoodsList from '../../goodlist/index.jsx'
import Header from '../../header/index.jsx'
import './index.scss'
import Arrow from'../../back/index'
import Axios from 'axios';

class CategoryList extends Component {
    state={
        list:[],
        cate: ['美食','甜品饮品','商超便利','预定早餐','果蔬生鲜','新店特惠','准时达','晚餐','汉堡薯条','包子粥店','鲜花蛋糕','麻辣烫','川香菜','披萨意面','异国料理']
    }
        
    componentDidMount() {
        const id = this.props.match.params.id;
        
        Axios.get('http://47.100.98.54:9019/api/category/list'+id).then((res)=>{
            // console.log(res.data.data)
            this.setState({
                list: res.data.data
            })
        })
    }
    getCate =()=>{
        const id = this.props.match.params.id;
        return this.state.cate[id]
    }
    render() {
        return (
            <div className={'categorylist'}>
                <div className='hd'>
                    <div className={'head'}>
                        <Arrow />
                        <div className={'title'}>{this. getCate()}</div>
                    </div>
                    <div className={'navTop'}>
                         <div className={'list'}>
                             <ul>
                                 <li>
                                     <a href="#" className={'active'}>
                                         全部
                                     </a>
                                 </li>
                                 <li>
                                     <a href="" >
                                         简餐便当
                                     </a>
                                 </li>
                                 <li>
                                     <a href="">小吃炸串</a>
                                 </li>
                                 <li>
                                     <a href="">
                                         面食粥点
                                     </a>

                                 </li>
                                 <li>
                                     <a href="">
                                         地方菜系
                                     </a>
                                 </li>
                                 <li>
                                     <a href="">
                                         汉堡披萨
                                     </a>
                                 </li>
                                 <li><a href="">
                                     香锅冒菜
                                 </a></li>
                                 <li>
                                     <a href="">
                                         轻食西餐
                                     </a>
                                 </li>
                             </ul>
                        </div>
                        <div className='  icon iconfont icon-iconfontjiantou'></div>
                    </div>
                </div> 
                <Menu/>
                {/*商品列表*/}
                {
                  this.state.list.length && <GoodsList  list={this.state.list}/>   
                }
                
            </div>
        );
    }
}

export default CategoryList;