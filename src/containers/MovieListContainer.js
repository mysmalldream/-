/*
 * 电影列表容器组件
 * */
import React from "react";
import service from "../service/movieService"; //引入自己服务器上的数据

export default class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true //是否显示遮罩
    };
  }

  componentDidMount() {
    //组件已经渲染 (生命周期)
    this.fetch();    //在生命周期的渲染后调用返回来的数据
  }

  //数据请求访问(自己定义的fetch方法)
  fetch = () => {
    const promise = service.getMovieListData();
    promise
      .then(
        function(data) {   //从服务器返回来的数据
          //两个函数形式的参数
          console.log(data);
          this.setState({
           isLoading: false //去掉遮罩
          })
        },
        function(err) {
          console.log(err);
        }
      )
      .catch(function(err) {  //抛出异常
        console.log(err);
      });
  };


  //渲染loading的遮罩效果
  renderLoading = () => {
    return (<div>电影详细数据正在加载,请稍后... ... ...</div>);
  };

  //返回的实际渲染数据
  renderMovieList = () => {
    return  (<div>数据加载成功!!!</div>);
  };

  render() {
    if (this.state.isLoading) {
      return this.renderLoading();
    } else {
      return this.renderMovieList();
    }
  }
}
