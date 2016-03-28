import React from 'react';
import ReactDOM from 'react-dom';
import ReactMFB from 'react-mfb-google-icon';

require('react-mfb-google-icon/mfb.css');

class ReactMFBDemo extends React.Component {
	render() {
		return (
			<div>
				<div>Demo for react-mfb-google-icon</div>
				<ReactMFB.Menu effect='zoomin' position='br' method='click'>
		          <ReactMFB.MainButton iconResting="add" iconActive="close" />
		          <ReactMFB.ChildButton
		            icon="settings"
		            label="Settings"
		            href="#"
		          />
		          <ReactMFB.ChildButton
		            icon="help"
		            label="Help"
		            href="#"
		          />
			    </ReactMFB.Menu>
			</div>
		);
	}
}

ReactDOM.render(
	<ReactMFBDemo />,
	document.getElementById('app')
);