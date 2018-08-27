import React from 'react';



class VideoDetail extends React.Component{
  

    render(){
    const video = this.props.video;


    
          
    if(!video){
        return <div>Loading</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    
    this.props.search(this.props.video.id.videoId)
    


    return (
        <div className='video-detail'>
        <div>
        <iframe className='detail-screen' src={url}></iframe>
        </div>
        <div className='details'>
        <div>
        <strong>Title:</strong>{video.snippet.title}
        </div>
        <div>
         <strong>Views:</strong>{this.props.views} <strong>Likes:</strong>{this.props.likes} <strong>Dislikes:</strong>{this.props.dislikes}
         </div>
        <div><strong>Description:</strong>{video.snippet.description}</div>
        </div>
        </div>
    )
}
}

export default VideoDetail