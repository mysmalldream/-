/*
 * 电影详情(我的)
 * */
import React from "react";
// import { browserHistory } from "react-router";

export default class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   isLoading: true,
    //   movieDetailData: {}
    };
  }

  static contextTypes = {
    router: React.PropTypes.object //属性校验
  };

  componentDidMount() { //组件已经渲染(生命周期)
    
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
    // if (this.state.isLoading) {
    //   return this.renderLoading();
    // }
    // return this.renderMovieDetail();
  }
}
