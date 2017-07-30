/*
 * 电影列表容器组件
 * */
import React from "react";
import service from "../service/movieService"; //引入自己服务器上的数据
import '../styles/movieList.css'    //电影列表页样式



export default class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true, //是否显示遮罩
      movieListData: []   //数组
    };
  }
   static contextTypes={
        router:React.PropTypes.object   //上下文属性的校验(静态属性)
    }
  componentDidMount() {
    //组件已经渲染 (生命周期)
    this.fetch(); //在生命周期的渲染后调用返回来的数据
  }

  //数据请求访问(自己定义的fetch方法)
  fetch = () => {
    const _this = this; //注意this的指向问题
    const promise = service.getMovieListData();
    promise
      .then(
        function(data) {
          //从服务器返回来的数据
          //两个函数形式的参数
          console.log(data);
          _this.setState({
            isLoading: false, //去掉遮罩
            movieListData: data.subjects
          });
        },
        function(err) {
          console.log(err);
        }
      )
      .catch(function(err) {
        //抛出异常
        console.log(err);
      });
  };

  //渲染loading的遮罩效果
  renderLoading = () => {
    return <div>电影详细数据正在加载,请稍后... ... ...</div>;
  };
    
  
  //返回的实际电影列表渲染数据    (循环渲染子组件,相当于for循环)
  renderMovieList = () => { 
    return (
      <div className="movieList_container">
        {this.state.movieListData.map(this.renderItem)}
      </div>
    );
  };

  //渲染每一条数据
  renderItem = (item) => {
    return (
      <div  className="movieList_item"  key={item.id} onClick={()=>this.goDetail(item.id)}>    {/*//唯一的id值,跳转传递的id值*/}
        <img src={item.images.small} alt=""/>
        <div>
            <h1>{item.title}</h1>
            <span>年代:{item.year}</span>
            <p>类型:{item.genres}</p>
        </div>
      </div>
    )
  };

    // 跳转到详细页面(MovieDetailContainer)
    goDetail=(id)=>{
        this.context.router.push(`/movie/movieDetail/${id}`)   //{/*用了ES6模板字符串*/}
    }

  render() {
    if (this.state.isLoading) {
      return this.renderLoading();
    } else {
      return this.renderMovieList();
    }
  }
}
