
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
      videos:[{
        etag:"XI7nbFXulYBIpL0ayR_gDh3eu1k/89HXyV_yW5h229stHbp9GXrDIos",
        id:{kind: "youtube#video", videoId: "Skpu5HaVkOc"},
        kind: "youtube#searchResult",
        snippet:{channelId:"UCJCx8aQrdx_ueXPmxTD2odQ",channelTitle:"Fast & Furious",description:"Furious 7 - Official Trailer (HD) In Theaters and IMAX April 3, 2015 http://www.furious7.com/ Continuing the global exploits in the unstoppable franchise built on ...",
        liveBroadcastContent:"none",publishedAt:"2014-11-01T19:55:33.000Z",thumbnails:{default:{url: "https://i.ytimg.com/vi/Skpu5HaVkOc/default.jpg", width: 120, height: 90},high:{url: "https://i.ytimg.com/vi/Skpu5HaVkOc/hqdefault.jpg", width: 480, height: 360},medium:{url: "https://i.ytimg.com/vi/Skpu5HaVkOc/mqdefault.jpg", width: 320, height: 180}},title:"Furious 7 - Official Trailer (HD)"}
      },
      {
        etag:"XI7nbFXulYBIpL0ayR_gDh3eu1k/dTUdEcPKaiThRq_cnTVkElC95Lg",
        id:{kind: "youtube#video", videoId: "xjDjIWPwcPU"},
        kind: "youtube#searchResult",
        snippet:{channelId:"UCvC4D8onUfXzvjTOM-dBfEA",channelTitle:"Marvel Entertainment",description:"Long live the king. Watch the new trailer for Marvel Studios #BlackPanther. In theaters February 16! ▻ Subscribe to Marvel: http://bit.ly/WeO3YJ Follow Marvel on ...",
        liveBroadcastContent:"none",publishedAt:"2017-10-16T13:00:07.000Z",thumbnails:{default:{url: "https://i.ytimg.com/vi/xjDjIWPwcPU/default.jpg", width: 120, height: 90},high:{url: "https://i.ytimg.com/vi/xjDjIWPwcPU/hqdefault.jpg", width: 480, height: 360},medium:{url: "https://i.ytimg.com/vi/xjDjIWPwcPU/mqdefault.jpg", width: 320, height: 180}},title:"Marvel Studios' Black Panther - Official Trailer"}  

      },
      {
        etag:"XI7nbFXulYBIpL0ayR_gDh3eu1k/gRkgbFwcf4zk0VdcyYuz3GTsvoI",
        id:{kind: "youtube#video", videoId: "zCy5WQ9S4c0"},
        kind: "youtube#searchResult",
        snippet:{
          channelId:"UCMs8iRg0RzAwYpeLQqjUQcw",
          channelTitle:"MoviesHistory",
          description:"Deep-sea explorer Brock Lovett has reached the most famous shipwreck of all - the Titanic. Emerging with a safe believed to contain a diamond called 'The ...",
        liveBroadcastContent:"none",
        publishedAt:"2009-04-19T00:30:35.000Z",
        thumbnails:{
          default:{
            url: "https://i.ytimg.com/vi/zCy5WQ9S4c0/default.jpg", width: 120, height: 90
          },
          high:{
            url:  "https://i.ytimg.com/vi/zCy5WQ9S4c0/hqdefault.jpg", width: 480, height: 360
          },
          medium:{
            url: "https://i.ytimg.com/vi/zCy5WQ9S4c0/mqdefault.jpg", width: 320, height: 180
          }
        },
        title:"Titanic - Official Trailer [1997]"
      }
      },
      {
        etag:"XI7nbFXulYBIpL0ayR_gDh3eu1k/zwdejRbrbvCn6mKI2k6350AL1iQ",
        id:{kind: "youtube#video", videoId: "owK1qxDselE"},
        kind: "youtube#searchResult",
        snippet:{
          channelId:"UChKUoTtUanH4kQMCjyG77Og",
          channelTitle:"nathansmoviereviews",
          description:"Fan-made. Footage copyright Universal. Music: The Wheat by Hans Zimmer Protectors of the Earth by Two Steps From Hell.",
        liveBroadcastContent:"none",
        publishedAt:"2012-11-11T19:18:32.000Z",
        thumbnails:{
          default:{
            url: "https://i.ytimg.com/vi/owK1qxDselE/default.jpg", width: 120, height: 90
          },
          high:{
            url: "https://i.ytimg.com/vi/owK1qxDselE/hqdefault.jpg", width: 480, height: 360
          },
          medium:{
            url: "https://i.ytimg.com/vi/owK1qxDselE/mqdefault.jpg", width: 320, height: 180
          }
        },
        title:"Gladiator trailer"
      }
      },
      {
        etag:"XI7nbFXulYBIpL0ayR_gDh3eu1k/2IZQpQOzBDj1B6lDODVTjkRY_tk",
        id:{kind: "youtube#video", videoId: "znTLzRJimeY"},
        kind: "youtube#searchResult",
        snippet:{
          channelId:"UCTCjFFoX1un-j7ni4B6HJ3Q",
          channelTitle:"Movieclips Classic Trailers",
          description:"Subscribe to CLASSIC TRAILERS: http://bit.ly/1u43jDe Subscribe to TRAILERS: http://bit.ly/sxaw6h Subscribe to COMING SOON: http://bit.ly/H2vZUn Like us on ...",
        liveBroadcastContent:"none",
        publishedAt:"2014-05-24T07:59:20.000Z",
        thumbnails:{
          default:{
            url: "https://i.ytimg.com/vi/znTLzRJimeY/default.jpg", width: 120, height: 90
          },
          high:{
            url: "https://i.ytimg.com/vi/znTLzRJimeY/hqdefault.jpg", width: 480, height: 360
          },
          medium:{
            url: "https://i.ytimg.com/vi/znTLzRJimeY/mqdefault.jpg", width: 320, height: 180
          }
        },
        title:"Troy (2004) Official Trailer - Brad Pitt, Eric Bana, Orlando Bloom Movie HD"
      }
      }
    ],
      selectedVideo:{
        etag:"XI7nbFXulYBIpL0ayR_gDh3eu1k/89HXyV_yW5h229stHbp9GXrDIos",
        id:{kind: "youtube#video", videoId: "Skpu5HaVkOc"},
        kind: "youtube#searchResult",
        snippet:{channelId:"UCJCx8aQrdx_ueXPmxTD2odQ",channelTitle:"Fast & Furious",description:"Furious 7 - Official Trailer (HD) In Theaters and IMAX April 3, 2015 http://www.furious7.com/ Continuing the global exploits in the unstoppable franchise built on ...",
        liveBroadcastContent:"none",publishedAt:"2014-11-01T19:55:33.000Z",thumbnails:{default:{url: "https://i.ytimg.com/vi/Skpu5HaVkOc/default.jpg", width: 120, height: 90},high:{url: "https://i.ytimg.com/vi/Skpu5HaVkOc/hqdefault.jpg", width: 480, height: 360},medium:{url: "https://i.ytimg.com/vi/Skpu5HaVkOc/mqdefault.jpg", width: 320, height: 180}},title:"Furious 7 - Official Trailer (HD)"}
      } ,
      views:'',
      likes:'',
      dislikes:'',
    }
    
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
    YTSearch({key:API_KEY,term:search,max:5},(data)=>{
        console.log(data)
      this.setState({
        videos:data,
      selectedVideo:data[0]
    })
    })
  }
  
//   componentDidMount(){
//     try{
//         const json = localStorage.getItem('videos')
//         const json1= localStorage.getItem('selectedVideo')
//         const videos = JSON.parse(json)
//         const selected = JSON.parse(json1)
//       console.log(videos)
//       console.log(selected)
//         if(videos){
//             this.setState(()=>({videos}))
//         }
//         if(selected){
//           this.setState(()=>({selectedVideo:selected}))
//         }
//     }catch(e){

//     }
// }

// componentDidUpdate(prevProps,prevState){
    
//         const json = JSON.stringify(this.state.videos)
//         const json1 = JSON.stringify(this.state.selectedVideo)
//         localStorage.setItem('videos',json)
//         localStorage.setItem('selectedVideo',json1)
    
// }

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
      <div className='detail-screen'>
      <VideoDetail video={this.state.selectedVideo} search = {(id)=> this.idSearch(id)} views = {this.state.views} likes={this.state.likes} dislikes={this.state.dislikes}/>
      </div>
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