/*
 * 电影详细容器组件
 * */
import React from 'react'
import service from '../service/movieService.js'

import '../styles/movieDetail.css'
export default class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            movieDetailData:{}   //直接就是对象
        }
    }

    componentDidMount() {  
      // console.log(this.props.params.id);    //接收MovieListConyainer传递过来的id值
        this.fetch(this.props.params.id)
    }

    // 数据请求访问
    fetch = (id)=> {
        const _this = this
        const promise = service.getMovieDetailData(id)
        promise.then(
            function (data) {
                _this.setState({
                    isLoading: false,
                    movieDetailData:data
                })
            },
            function (err) {
                console.log('出错啦!!!!')
            }
        ).catch(function (err) {

        })

    }
    // 渲染loading遮罩
    renderLoading = ()=> {
        return (
            <div>
                正在加载数据，请等待......
            </div>
        )
    }

    // 渲染电影详情数据(直接渲染子组件就额可以了,不用再循环渲染了)
    renderMovieDetail = ()=> {    
        return (
            <div className="movieDetail_container">
                <div className="movieDetail_image">
                    <img src={this.state.movieDetailData.images.large} alt=""/>
                </div>
                <div>
                    <h1>{this.state.movieDetailData.title}</h1>
                    <p>{this.state.movieDetailData.summary}</p>
                </div>
            </div>
        )
    }

    render() {
        if (this.state.isLoading) {
            return this.renderLoading()
        }
        return this.renderMovieDetail()
    }
}

