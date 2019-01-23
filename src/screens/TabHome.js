

  import React, { Component } from 'react';
  import Swiper from 'react-native-swiper';
  import {AppRegistry, Image, View, Dimensions, Text, StyleSheet ,ScrollView} from 'react-native';
  const {ScreenWidth, ScreenHeight} = Dimensions.get('window');
  
  export default class TabHome extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          isShow: false,
          items:[],
          num:[1,2,3,4,5,6,7,8,9,10]
      }
  }

  componentDidMount() {
    var item;
    for (let i = 0; i < 3; i++){
        switch (i){
            case 0:{
                item = 'http://blogdailyherald.com/wp-content/uploads/2013/04/382065_560557460633306_930109857_n.jpg';
                break;
            }
            case 1:{
                item = 'http://img0.pclady.com.cn/pclady/pet/choice/cat/1701/6.jpg';
                break;
            }
            default:{
                item = 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3812b31bb051f819dc048662dbb44aed2e73e7f1.jpg';
                break;
            }
        }
        this.state.items.push(item);
    }
    this.setState({
        isShow: true,
        items: this.state.items
    })
}

    render() {
      let H = 200;
    
      if (this.state.isShow) {
          return(
              <View style = {{height:ScreenHeight}}>
              <Text style={{backgroundColor:'orange',color:'#fff',paddingLeft:10}}>欢迎来到宠物之家！！！！</Text>
             {/* 轮播图 */}
              <View style={{height: H, width:ScreenWidth}}>
                
                  <Swiper  showsPagination = {true} dotColor="white" autoplay
                          activeDotColor='yellow' horizontal={true} >
                      {
                       this.state.items.map((item, index) => {
                       return (<Image style={{height: H, width:ScreenWidth}} key = {index} resizeMode='cover' source={{uri: item}}/>)
                       })
                      }
                  </Swiper>
              </View>
              {/* 导航条 */}
              <ScrollView >
              {/* <View style={styles.container}>
                <Image
                  source={{uri:"http://img0.pclady.com.cn/pclady/pet/choice/cat/1701/6.jpg"}}
                  style={styles.thumbnail}
                />

                <View style={styles.rightContainer}>
                    <Text style={styles.title}>标题</Text>
                    <Text style={styles.year}>内容</Text>           
                </View>

              </View>    */}
              {
                this.state.num.map((item,index)=>{
                  return(
                    <View style={styles.container} key = {index}>
                    <Image
                      source={{uri:"http://img0.pclady.com.cn/pclady/pet/choice/cat/1701/6.jpg"}}
                      style={styles.thumbnail}
                    />

                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>萌宠小猫</Text>
                        <Text style={styles.year}>猫，属于猫科动物，分家猫、野猫，是全世界家庭中较为广泛的宠物。家猫的祖先据推测是起源于古埃及的沙漠猫，波斯的波斯猫....</Text>           
                    </View>

              </View>
                  )
                })
              }
              </ScrollView>
            </View>
          );
      }else {
          return(
             <Text> 加载中。。。。。。。。</Text>
          );
      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 占一份，可能是横向（代表width）也可能是纵向（代表height）
    flexDirection:'row',   // 指定让容器内的成员从左到右横向布局，默认从上到下纵向布局
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingLeft:12
  },
  thumbnail:{
    width:100,
    height:100,
    marginTop: 10,
  },
  rightContainer:{
    flex:1 // 占一份
  },
  title:{
    fontSize:20,
    marginBottom:8,
    marginLeft: 10,
    textAlign:'left'
  },
  year:{
    textAlign:'left',
    marginLeft: 10,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  }
});