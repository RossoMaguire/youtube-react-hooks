import React from "react";

const VideoDetail = ({ video }) => {
  return (
    <div>
      {video && (
        <div>
          <div className="ui embed">
            <iframe
              title={video.snippet.title}
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
            />
          </div>
          <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDetail;
