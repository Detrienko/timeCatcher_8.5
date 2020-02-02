import React, { Component } from 'react';
import firebase from './config/fbConfig';
import * as fetchingDataActions from './store/actions/fetchingDataActions';

import { connect } from 'react-redux';

export const AuthContext = React.createContext();

export class AuthProvider extends Component{

	state ={
		currentUser: null,
	}

	signOut = () => {
		firebase.auth().signOut();
		this.setState({currentUser: null})
		this.props.store.dispatch(fetchingDataActions.clearState());
	}

	componentDidMount(){
		const that = this;
		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    that.setState({currentUser: user})
        	that.props.store.dispatch(fetchingDataActions.fetchBusinessDataBegin(user.uid))
		  } else {
		    that.setState({currentUser: null})
		  }
		});
	}

	render(){
	return(
		<AuthContext.Provider 
			value={{
				state: this.state,
				signOut: this.signOut
			}}>
			{this.props.children}
		</AuthContext.Provider>	
		);	
	}
}

export default connect()(AuthProvider);