import config from "../js/config.js"; //导入公共配置文件
export default {
  //获取电影列表数据
  getMovieListData() {
    //https://api.douban.com/v2/movie/in_theaters?start=3&count=10 (照着拼接)
    const url = `${config.HTTP}${config.SERVER_PATH}:${config.PORT}/getMovieListData`
    return new Promise(function(resolve, reject) {
      //http://es6.ruanyifeng.com/#docs/promise#基本用法
      // 模拟假数据(备用)
      setTimeout(function() {
        const data = {
          count: 11,
          start: 1,
          total: 32,
          subjects: [
            {
              rating: {
                max: 10,
                average: 0,
                stars: "00",
                min: 0
              },
              genres: ["剧情", "历史"],
              title: "建军大业",
              casts: [
                {
                  alt: "https://movie.douban.com/celebrity/1000572/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/43.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/43.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/43.jpg"
                  },
                  name: "刘烨",
                  id: "1000572"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1312699/",
                  avatars: {
                    small:
                      "https://img1.doubanio.com/img/celebrity/small/1414489207.88.jpg",
                    large:
                      "https://img1.doubanio.com/img/celebrity/large/1414489207.88.jpg",
                    medium:
                      "https://img1.doubanio.com/img/celebrity/medium/1414489207.88.jpg"
                  },
                  name: "朱亚文",
                  id: "1312699"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1255860/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1415028529.74.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1415028529.74.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1415028529.74.jpg"
                  },
                  name: "黄志忠",
                  id: "1255860"
                }
              ],
              collect_count: 224,
              original_title: "建军大业",
              subtype: "movie",
              directors: [
                {
                  alt: "https://movie.douban.com/celebrity/1106979/",
                  avatars: {
                    small:
                      "https://img1.doubanio.com/img/celebrity/small/1403267018.07.jpg",
                    large:
                      "https://img1.doubanio.com/img/celebrity/large/1403267018.07.jpg",
                    medium:
                      "https://img1.doubanio.com/img/celebrity/medium/1403267018.07.jpg"
                  },
                  name: "刘伟强",
                  id: "1106979"
                }
              ],
              year: "2017",
              images: {
                small:
                  "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2493892158.jpg",
                large:
                  "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2493892158.jpg",
                medium:
                  "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2493892158.jpg"
              },
              alt: "https://movie.douban.com/subject/26692823/",
              id: "26692823"
            },
            {
              rating: {
                max: 10,
                average: 7.6,
                stars: "40",
                min: 0
              },
              genres: ["剧情", "动作", "武侠"],
              title: "绣春刀II：修罗战场",
              casts: [
                {
                  alt: "https://movie.douban.com/celebrity/1077991/",
                  avatars: {
                    small:
                      "https://img1.doubanio.com/img/celebrity/small/1453574419.48.jpg",
                    large:
                      "https://img1.doubanio.com/img/celebrity/large/1453574419.48.jpg",
                    medium:
                      "https://img1.doubanio.com/img/celebrity/medium/1453574419.48.jpg"
                  },
                  name: "张震",
                  id: "1077991"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1052359/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/37843.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/37843.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/37843.jpg"
                  },
                  name: "杨幂",
                  id: "1052359"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1274761/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/25943.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/25943.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/25943.jpg"
                  },
                  name: "张译",
                  id: "1274761"
                }
              ],
              collect_count: 88993,
              original_title: "绣春刀II：修罗战场",
              subtype: "movie",
              directors: [
                {
                  alt: "https://movie.douban.com/celebrity/1321200/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/50405.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/50405.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/50405.jpg"
                  },
                  name: "路阳",
                  id: "1321200"
                }
              ],
              year: "2017",
              images: {
                small:
                  "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2492665487.jpg",
                large:
                  "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2492665487.jpg",
                medium:
                  "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2492665487.jpg"
              },
              alt: "https://movie.douban.com/subject/26270502/",
              id: "26270502"
            },
            {
              rating: {
                max: 10,
                average: 7,
                stars: "35",
                min: 0
              },
              genres: ["喜剧", "动画", "冒险"],
              title: "神偷奶爸3",
              casts: [
                {
                  alt: "https://movie.douban.com/celebrity/1054391/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/15731.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/15731.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/15731.jpg"
                  },
                  name: "史蒂夫·卡瑞尔",
                  id: "1054391"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1022588/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/24543.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/24543.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/24543.jpg"
                  },
                  name: "克里斯汀·韦格",
                  id: "1022588"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1027229/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/5253.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/5253.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/5253.jpg"
                  },
                  name: "崔·帕克",
                  id: "1027229"
                }
              ],
              collect_count: 81186,
              original_title: "Despicable Me 3",
              subtype: "movie",
              directors: [
                {
                  alt: "https://movie.douban.com/celebrity/1313385/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/51602.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/51602.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/51602.jpg"
                  },
                  name: "凯尔·巴尔达",
                  id: "1313385"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1313061/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1389806916.36.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1389806916.36.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1389806916.36.jpg"
                  },
                  name: "皮埃尔·科凡",
                  id: "1313061"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1365884/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1499651172.02.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1499651172.02.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1499651172.02.jpg"
                  },
                  name: "埃里克·吉伦",
                  id: "1365884"
                }
              ],
              year: "2017",
              images: {
                small:
                  "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2469070974.jpg",
                large:
                  "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2469070974.jpg",
                medium:
                  "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2469070974.jpg"
              },
              alt: "https://movie.douban.com/subject/25812712/",
              id: "25812712"
            },
            {
              rating: {
                max: 10,
                average: 5.3,
                stars: "30",
                min: 0
              },
              genres: ["喜剧", "动画", "冒险"],
              title: "大耳朵图图之美食狂想曲",
              casts: [
                {
                  alt: "https://movie.douban.com/celebrity/1317642/",
                  avatars: {
                    small:
                      "https://img1.doubanio.com/img/celebrity/small/40719.jpg",
                    large:
                      "https://img1.doubanio.com/img/celebrity/large/40719.jpg",
                    medium:
                      "https://img1.doubanio.com/img/celebrity/medium/40719.jpg"
                  },
                  name: "潘延",
                  id: "1317642"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1321911/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1357876944.24.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1357876944.24.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1357876944.24.jpg"
                  },
                  name: "范楚绒",
                  id: "1321911"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1328393/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1498555461.54.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1498555461.54.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1498555461.54.jpg"
                  },
                  name: "胡谦",
                  id: "1328393"
                }
              ],
              collect_count: 408,
              original_title: "大耳朵图图之美食狂想曲",
              subtype: "movie",
              directors: [
                {
                  alt: "https://movie.douban.com/celebrity/1327328/",
                  avatars: {
                    small:
                      "https://img1.doubanio.com/img/celebrity/small/1381377742.7.jpg",
                    large:
                      "https://img1.doubanio.com/img/celebrity/large/1381377742.7.jpg",
                    medium:
                      "https://img1.doubanio.com/img/celebrity/medium/1381377742.7.jpg"
                  },
                  name: "速达",
                  id: "1327328"
                }
              ],
              year: "2017",
              images: {
                small:
                  "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2490966346.jpg",
                large:
                  "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2490966346.jpg",
                medium:
                  "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2490966346.jpg"
              },
              alt: "https://movie.douban.com/subject/22232939/",
              id: "22232939"
            },
            {
              rating: {
                max: 10,
                average: 5.8,
                stars: "30",
                min: 0
              },
              genres: ["动画"],
              title: "豆福传",
              casts: [
                {
                  alt: "https://movie.douban.com/celebrity/1280571/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/10935.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/10935.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/10935.jpg"
                  },
                  name: "陈佩斯",
                  id: "1280571"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1274438/",
                  avatars: {
                    small:
                      "https://img1.doubanio.com/img/celebrity/small/32977.jpg",
                    large:
                      "https://img1.doubanio.com/img/celebrity/large/32977.jpg",
                    medium:
                      "https://img1.doubanio.com/img/celebrity/medium/32977.jpg"
                  },
                  name: "李立群",
                  id: "1274438"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1317669/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/40762.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/40762.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/40762.jpg"
                  },
                  name: "季冠霖",
                  id: "1317669"
                }
              ],
              collect_count: 1196,
              original_title: "豆福传",
              subtype: "movie",
              directors: [
                {
                  alt: "https://movie.douban.com/celebrity/1354805/",
                  avatars: {
                    small:
                      "https://img1.doubanio.com/img/celebrity/small/1455949404.39.jpg",
                    large:
                      "https://img1.doubanio.com/img/celebrity/large/1455949404.39.jpg",
                    medium:
                      "https://img1.doubanio.com/img/celebrity/medium/1455949404.39.jpg"
                  },
                  name: "邹燚",
                  id: "1354805"
                }
              ],
              year: "2017",
              images: {
                small:
                  "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2494279975.jpg",
                large:
                  "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2494279975.jpg",
                medium:
                  "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2494279975.jpg"
              },
              alt: "https://movie.douban.com/subject/26705107/",
              id: "26705107"
            },
            {
              rating: {
                max: 10,
                average: 5.4,
                stars: "30",
                min: 0
              },
              genres: ["剧情", "动作", "奇幻"],
              title: "悟空传",
              casts: [
                {
                  alt: "https://movie.douban.com/celebrity/1013782/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1368156632.65.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1368156632.65.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1368156632.65.jpg"
                  },
                  name: "彭于晏",
                  id: "1013782"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1315861/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1368598869.24.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1368598869.24.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1368598869.24.jpg"
                  },
                  name: "倪妮",
                  id: "1315861"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1041510/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/802.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/802.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/802.jpg"
                  },
                  name: "余文乐",
                  id: "1041510"
                }
              ],
              collect_count: 79320,
              original_title: "悟空传",
              subtype: "movie",
              directors: [
                {
                  alt: "https://movie.douban.com/celebrity/1274244/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1387853548.15.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1387853548.15.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1387853548.15.jpg"
                  },
                  name: "郭子健",
                  id: "1274244"
                }
              ],
              year: "2017",
              images: {
                small:
                  "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2475060299.jpg",
                large:
                  "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2475060299.jpg",
                medium:
                  "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2475060299.jpg"
              },
              alt: "https://movie.douban.com/subject/26035290/",
              id: "26035290"
            },
            {
              rating: {
                max: 10,
                average: 7.5,
                stars: "40",
                min: 0
              },
              genres: ["剧情", "喜剧", "音乐"],
              title: "闪光少女",
              casts: [
                {
                  alt: "https://movie.douban.com/celebrity/1319376/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1433145556.71.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1433145556.71.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1433145556.71.jpg"
                  },
                  name: "徐璐",
                  id: "1319376"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1354775/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1498308698.86.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1498308698.86.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1498308698.86.jpg"
                  },
                  name: "彭昱畅",
                  id: "1354775"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1375961/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1498314784.03.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1498314784.03.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1498314784.03.jpg"
                  },
                  name: "刘泳希",
                  id: "1375961"
                }
              ],
              collect_count: 20724,
              original_title: "闪光少女",
              subtype: "movie",
              directors: [
                {
                  alt: "https://movie.douban.com/celebrity/1375966/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1498315140.44.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1498315140.44.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1498315140.44.jpg"
                  },
                  name: "王冉",
                  id: "1375966"
                }
              ],
              year: "2017",
              images: {
                small:
                  "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2494279492.jpg",
                large:
                  "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2494279492.jpg",
                medium:
                  "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2494279492.jpg"
              },
              alt: "https://movie.douban.com/subject/26790961/",
              id: "26790961"
            },
            {
              rating: {
                max: 10,
                average: 8,
                stars: "40",
                min: 0
              },
              genres: ["喜剧", "动画", "奇幻"],
              title: "大护法",
              casts: [
                {
                  alt: "https://movie.douban.com/celebrity/1345276/",
                  avatars: {
                    small:
                      "https://img1.doubanio.com/img/celebrity/small/1471147748.38.jpg",
                    large:
                      "https://img1.doubanio.com/img/celebrity/large/1471147748.38.jpg",
                    medium:
                      "https://img1.doubanio.com/img/celebrity/medium/1471147748.38.jpg"
                  },
                  name: "小连杀",
                  id: "1345276"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1343032/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1439298716.36.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1439298716.36.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1439298716.36.jpg"
                  },
                  name: "图特哈蒙",
                  id: "1343032"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1275482/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/32611.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/32611.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/32611.jpg"
                  },
                  name: "金士杰",
                  id: "1275482"
                }
              ],
              collect_count: 96134,
              original_title: "大护法",
              subtype: "movie",
              directors: [
                {
                  alt: "https://movie.douban.com/celebrity/1358697/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1493285970.66.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1493285970.66.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1493285970.66.jpg"
                  },
                  name: "不思凡",
                  id: "1358697"
                }
              ],
              year: "2017",
              images: {
                small:
                  "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2490948849.jpg",
                large:
                  "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2490948849.jpg",
                medium:
                  "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2490948849.jpg"
              },
              alt: "https://movie.douban.com/subject/26811587/",
              id: "26811587"
            },
            {
              rating: {
                max: 10,
                average: 5.1,
                stars: "25",
                min: 0
              },
              genres: ["剧情", "喜剧"],
              title: "父子雄兵",
              casts: [
                {
                  alt: "https://movie.douban.com/celebrity/1324043/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1490342249.11.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1490342249.11.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1490342249.11.jpg"
                  },
                  name: "大鹏",
                  id: "1324043"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1051526/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1120.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1120.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1120.jpg"
                  },
                  name: "范伟",
                  id: "1051526"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1353578/",
                  avatars: {
                    small:
                      "https://img1.doubanio.com/img/celebrity/small/1458201743.67.jpg",
                    large:
                      "https://img1.doubanio.com/img/celebrity/large/1458201743.67.jpg",
                    medium:
                      "https://img1.doubanio.com/img/celebrity/medium/1458201743.67.jpg"
                  },
                  name: "张天爱",
                  id: "1353578"
                }
              ],
              collect_count: 10403,
              original_title: "父子雄兵",
              subtype: "movie",
              directors: [
                {
                  alt: "https://movie.douban.com/celebrity/1315235/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1361009693.81.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1361009693.81.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1361009693.81.jpg"
                  },
                  name: "袁卫东",
                  id: "1315235"
                }
              ],
              year: "2017",
              images: {
                small:
                  "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2492957074.jpg",
                large:
                  "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2492957074.jpg",
                medium:
                  "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2492957074.jpg"
              },
              alt: "https://movie.douban.com/subject/26898747/",
              id: "26898747"
            },
            {
              rating: {
                max: 10,
                average: 0,
                stars: "00",
                min: 0
              },
              genres: ["悬疑", "恐怖"],
              title: "夜半凶铃",
              casts: [
                {
                  alt: "https://movie.douban.com/celebrity/1324425/",
                  avatars: {
                    small:
                      "https://img1.doubanio.com/img/celebrity/small/1432631731.99.jpg",
                    large:
                      "https://img1.doubanio.com/img/celebrity/large/1432631731.99.jpg",
                    medium:
                      "https://img1.doubanio.com/img/celebrity/medium/1432631731.99.jpg"
                  },
                  name: "刘青",
                  id: "1324425"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1317325/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/39485.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/39485.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/39485.jpg"
                  },
                  name: "李浩轩",
                  id: "1317325"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1339731/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1499164395.6.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1499164395.6.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1499164395.6.jpg"
                  },
                  name: "白瑶",
                  id: "1339731"
                }
              ],
              collect_count: 456,
              original_title: "夜半凶铃",
              subtype: "movie",
              directors: [
                {
                  alt: "https://movie.douban.com/celebrity/1376582/",
                  avatars: {
                    small:
                      "https://img1.doubanio.com/img/celebrity/small/1499243527.29.jpg",
                    large:
                      "https://img1.doubanio.com/img/celebrity/large/1499243527.29.jpg",
                    medium:
                      "https://img1.doubanio.com/img/celebrity/medium/1499243527.29.jpg"
                  },
                  name: "李耀东",
                  id: "1376582"
                }
              ],
              year: "2017",
              images: {
                small:
                  "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2492324154.jpg",
                large:
                  "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2492324154.jpg",
                medium:
                  "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2492324154.jpg"
              },
              alt: "https://movie.douban.com/subject/27082116/",
              id: "27082116"
            },
            {
              rating: {
                max: 10,
                average: 8,
                stars: "40",
                min: 0
              },
              genres: ["剧情"],
              title: "深夜食堂2",
              casts: [
                {
                  alt: "https://movie.douban.com/celebrity/1051523/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/20084.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/20084.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/20084.jpg"
                  },
                  name: "小林薰",
                  id: "1051523"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1043635/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/30282.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/30282.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/30282.jpg"
                  },
                  name: "河井青叶",
                  id: "1043635"
                },
                {
                  alt: "https://movie.douban.com/celebrity/1037432/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/1433765376.2.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/1433765376.2.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/1433765376.2.jpg"
                  },
                  name: "佐藤浩市",
                  id: "1037432"
                }
              ],
              collect_count: 18910,
              original_title: "続・深夜食堂",
              subtype: "movie",
              directors: [
                {
                  alt: "https://movie.douban.com/celebrity/1291293/",
                  avatars: {
                    small:
                      "https://img3.doubanio.com/img/celebrity/small/34872.jpg",
                    large:
                      "https://img3.doubanio.com/img/celebrity/large/34872.jpg",
                    medium:
                      "https://img3.doubanio.com/img/celebrity/medium/34872.jpg"
                  },
                  name: "松冈锭司",
                  id: "1291293"
                }
              ],
              year: "2016",
              images: {
                small:
                  "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2492869776.jpg",
                large:
                  "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2492869776.jpg",
                medium:
                  "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2492869776.jpg"
              },
              alt: "https://movie.douban.com/subject/26798437/",
              id: "26798437"
            }
          ],
          title: "正在上映的电影-北京"
        };
        resolve(data);
      }, 3000);

      //调用ES6的分fetch方法(真实数据请求)
      // fetch(url)
      //   .then(response => {
      //     if (response.ok) {
      //       return response.json();
      //     } else {
      //       console.error("服务器繁忙，请稍后再试；\r\nCode:" + response.status);
      //     }
      //   })
      //   .then(data => {
      //     resolve(data);
      //   })
      //   .catch(err => {
      //     reject(err);
      //   });
    });
  }
};
