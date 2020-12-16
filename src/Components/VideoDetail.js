import React from 'react';
import VideoList from './VideoList';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Search from a Video</div>;
	}
	return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
