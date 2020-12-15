import axios from 'axios';

const KEY = 'AIzaSyDdSfrks7njBOha-NgGR9mYef6WAvxbviA';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3?key=',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY,
	},
});
