import React, {Component} from 'react';
import "./index.scss";

class Arrow extends Component {
    handback =()=>{
        window.history.go(-1)
    }
    render() {
        return (
            <a href={'javascript:;'} onClick={this.handback} className={'back iconfont icon-xiazai6'}></a>
        );
    }
}

export default Arrow;