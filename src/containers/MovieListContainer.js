/*
 * 电影列表容器组件
 * */
import React from "react";

export default class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true   //是否显示遮罩
    }; 
  }

 

  componentDidMount() {
    //组件已经渲染 (生命周期)
    let _this=this;
    setTimeout(function (){
        _this.setState ({
            isLoading:false
        })
    },2000)
  }

  //渲染loading的遮罩效果
  renderLoading = () => {
    return (<div>电影详细数据正在加载,请稍后...</div>);
    console.log(132);
  };
  //返回的实际渲染数据
  renderMovieList = () => {
    return (<div>数据加载正确</div>);
  };
  render() {
    if (this.state.isLoading) {
      return this.renderLoading();
    } else {
      return this.renderMovieList();
    }
  }
}
