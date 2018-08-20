import React from 'react';
import firebase from 'firebase';
import Router from './Router';

class App extends React.Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyDaQXN1HXp3z3tirLINeM-gtc5ftHpTBKM"',
			authDomain: 'otpauth-50d50.firebaseapp.com',
			databaseURL: 'https://otpauth-50d50.firebaseio.com',
			projectId: 'otpauth-50d50',
			storageBucket: 'otpauth-50d50.appspot.com',
			messagingSenderId: '377015745680'
		};
		firebase.initializeApp(config);
	}

	render() {
		return (
			<Router />
		);
	}
}

export default App;
