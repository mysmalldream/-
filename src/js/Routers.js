/*
* 路由总的配置文件
* */
import React from 'react'
import { Router, Route,IndexRoute,Redirect,browserHistory} from 'react-router'

import AppContainer from '../containers/AppContainer.js'   //根组件(各个页面公共部分组件)
import HomeContainer from '../containers/HomeContainer.js'  //首页
import MovieContainer from '../containers/MovieContainer.js' //电影页面
import MovieListContainer from '../containers/MovieListContainer.js' //电影列表
import MovieDetailContainer from '../containers/MovieDetailContainer.js' //电影列表详情
import MovieSearchContainer from '../containers/movieSearchContainer.js'  //电影页搜索
import AboutContainer from '../containers/AboutContainer.js'  //关于我们

export default class Routers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={AppContainer}>
                    <IndexRoute component={HomeContainer}/>
                    <Route path="home" component={HomeContainer} />
                    <Route path="movie"
                           component={MovieContainer}
                           onEnter={()=>console.log('进入了movie路由')}
                           onLeave={()=>console.log('离开了movie路由')}
                    >
                        {/*绝对路由*/}
                        <Route path="movieList" component={MovieListContainer} />
                        <Route path="movieDetail" component={MovieDetailContainer} />
                        <Route path="movieSearch" component={MovieSearchContainer} />
                        {/*<Redirect from="movieList" to="/movieList" />*/}
                        {/*<Redirect from="movieDetail" to="/movieDetail" />*/}
                    </Route>
                    <Route path="about" component={AboutContainer} />
                </Route>
            </Router>
        );
    }
}

