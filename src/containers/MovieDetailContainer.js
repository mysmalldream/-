/*
 * 电影列表详情
 * */
import React from 'react'
import {browserHistory} from 'react-router'

export default class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    static contextTypes={
        router:React.PropTypes.object
    }


    componentDidMount(){
        // 方法一
        // setTimeout(function () {
        //     browserHistory.push('/home')
        // },3000)

        // 方法二
        // const _this=this
        // setTimeout(function () {
        //     _this.context.router.push('/home')
        // },3000)
    }

    render() {
        return (
           <div>
               这是电影详细容器组件111
           </div>
        );
    }
}

