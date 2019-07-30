import React, { Component } from 'react'
// import { Icon,Input } from 'antd';
import './index.scss'

export default class Find extends Component {
  render() {
    return (
      <div>
        <div className={'find'}>
                <div className={'findVideo'}>
                    <div className={'videoCon'}>
                        <div className={'con'}>
                            <video width={'100%'} height={'100%'} autoPlay muted src="https://app-builder-resource.oss-cn-shanghai.aliyuncs.com/prod/uploadckjn5re0ra.mp4"></video>
                        </div>
                    </div>
                </div>
                <div className={'aMap'}></div>
            </div>
      </div>
    )
  }
}
