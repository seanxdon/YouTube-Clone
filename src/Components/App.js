import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
//styles
import '../styles/App.css';
import styled from 'styled-components';
//imgs
import YoutubeLogo from '../imgs/Youtube-Logo.png';

const KEY = 'AIzaSyDdSfrks7njBOha-NgGR9mYef6WAvxbviA';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount = () => {
		this.onTermSubmit('React Guide');
	};

	onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
				part: 'snippet',
				maxResults: 5,
				type: 'video',
				key: KEY,
			},
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				<div className="youtube-header">
					<img className="youtube-logo" src={YoutubeLogo} alt="youtube-logo" />
				</div>
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<Col1 className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</Col1>
						<Col2 className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</Col2>
					</div>
				</div>
			</div>
		);
	}
}

const Col1 = styled.div``;

const Col2 = styled.div``;

export default App;
