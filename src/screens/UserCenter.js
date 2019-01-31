import React, { Component } from 'react'
import { Text, View ,FlatList} from 'react-native'
//请求数据的接口地址
let REQUEST_URL ='https://api.apiopen.top/getTangPoetry'
export default class UserCenter extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      loading: false
    };
    this.fetchData = this.fetchData.bind(this);
  }
  //组件加载完成调用函数
  componentDidMount(){
    this.fetchData()
  }
  //使用方法拿数据
  fetchData(){
    fetch(REQUEST_URL)
    .then(res=>{
      res = JSON.parse(res._bodyText)
      if(res.code*1 == 200){
        this.setState({
          data: this.state.data.concat(res.result),
          loading: true
        });
        console.log(this.state.data,'data')
      }
    }).catch(err=>{
      console.log(err,'err')
    })
  }
  render() {

  if(!this.state.loading){
   return this.renderLoadingView();
  }
  return (
    <FlatList
      data={this.state.data}
      renderItem={this.renderMovie}
      style={{backgroundColor:'gray'}}
    />
  );
}
 
  //正在加载数据
  renderLoadingView() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>正在加载诗词,请耐心等待...</Text>
      </View>
    );
  }

  //有数据是加载的
  renderMovie({ item }) {
    return (
      <View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',marginBottom:20}}>
          <Text style={{color:'#fff'}}>{item.title}</Text>
          <Text style={{color:'#fff'}}>{item.authors}</Text>
          <View style={{width:180,flexWrap:'wrap'}}>
            <Text style={{color:'#fff'}}>{item.content}</Text>
          </View>
          
        </View>
      </View>
    );
  }


}
