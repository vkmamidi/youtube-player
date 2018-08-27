
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import Search from './components/search';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videolist';
import VideoDetail from './components/videodetails';
import $ from 'jquery'
import {Grid,Row,Col} from 'react-bootstrap';

const API_KEY = 'AIzaSyB008zqkIvBy0l7x93rHllu56V6a_9mh8w';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      videos:[],
      selectedVideo: null,
      views:'',
      likes:'',
      dislikes:'',
    }

    this.videoSearch('React Tutorials');
    
  }

  idSearch = (id)=>{
  this.searchYouTube({key:API_KEY,term:id},(data)=>{
    // console.log(data.items[0].statistics)
    this.setState(()=>({
      views:data.items[0].statistics.viewCount,
      likes:data.items[0].statistics.likeCount,
      dislikes:data.items[0].statistics.dislikeCount,
    }))
  })

  }
  searchYouTube = (options,callback)=>{
    $.get('https://www.googleapis.com/youtube/v3/videos', {
  part: 'statistics',
  id: options.term,
  key: API_KEY
}).done(function(data) {
  // console.log(data);
  callback(data);
});
};
  

  
  videoSearch = (search)=>{
    // this.searchYouTube({key:API_KEY,term:term},(data)=>{
    //   this.setState({
    //       videos:data.items,
    //     })
    //   })
    // }
    YTSearch({key:API_KEY,term:search},(data)=>{
      this.setState({
        videos:data,
      selectedVideo:data[0]
    })
    })
  }
  

//   searchYouTube = (options,callback)=>{
//     $.get('https://www.googleapis.com/youtube/v3/search', {
//   key: API_KEY,
//   q: options.term,
//   part: 'snippet',
//   maxResults: options.max,
// }).done(function(data) {
//   console.log(data);
//   callback(data);
// });
// };
  
  

  render(){
    
    
    // console.log(this.state.videos)
    return(
      <div>
      <Grid>
      <Row className='show-grid'>
      <Col xs={12}>
      <Search onSearchChange = {(search)=> this.videoSearch(search)}/>
      </Col>
      </Row>
      </Grid>
      <Grid>
      <Row className='show-grid'>
      <Col xs={8} md={8}>
      <VideoDetail video={this.state.selectedVideo} search = {(id)=> this.idSearch(id)} views = {this.state.views} likes={this.state.likes} dislikes={this.state.dislikes}/>
      </Col>
      <Col xs={4} md={4}>
      <VideoList videos={this.state.videos} onVideoSelect = {(userSelected)=> this.setState({selectedVideo:userSelected})}/>
      </Col>
      </Row>
      </Grid>
      </div>
    )
  }

}


ReactDOM.render(<App/>,document.getElementById('app'))