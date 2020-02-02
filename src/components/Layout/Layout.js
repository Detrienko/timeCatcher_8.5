import React, {useState, useContext} from 'react';
import classes from './Layout.module.css';
import firebase from '../../config/fbConfig';
import {AuthContext} from '../../Auth';


import SignInForm from '../../containers/Forms/SignInForm/SignInForm';
import SignUpForm from '../../containers/Forms/SignUpForm/SignUpForm';
import ProfileMenu from '../ProfileMenu/ProfileMenu';

function Layout(props) {

	const contextObj = useContext(AuthContext);

	const [ isModalShown, setIsModalShown ] = useState({
		isSignUpModalShown: false,
		isSignInModalShown: false
	})

	const [profileMenu, setProfileMenu] = useState({
		isProfileMenuShown: false
	})


	const showSignUpModal = () => {
		setIsModalShown({
			isSignUpModalShown: true,
			isSignInModalShown: false
		})
	}

	const showSignInModal = () => {
		setIsModalShown({
			isSignUpModalShown: false,
			isSignInModalShown: true
		})
	}

	const hideModal = () => {
		setIsModalShown({
			isSignUpModalShown: false,
			isSignInModalShown: false
		})
	}

	const profileMenuHandler = () =>{
		setProfileMenu({
			isProfileMenuShown: !profileMenu.isProfileMenuShown
		})
	}



	let topMenu = null;
	let modal = null;
	let profileMenuComp = null;


	if(isModalShown.isSignUpModalShown){
		modal = <SignUpForm  showSignInModal={showSignInModal} hideModal={hideModal}/>
	}

	if(isModalShown.isSignInModalShown){
		modal = <SignInForm showSignUpModal={showSignUpModal} hideModal={hideModal}/>
	}

	if(contextObj.state.currentUser){
		topMenu = <ul className={classes.topMenu}>
	    			<li className={classes.accountProfile} onClick={profileMenuHandler} ><a href="#">{contextObj.state.currentUser.email}</a></li>
	    		  </ul> 
	}

	if(!contextObj.state.currentUser){
		topMenu = <ul className={classes.topMenu}>
	   				<li className={classes.logIn} onClick={showSignUpModal}><a href="#">Sign Up</a></li>
	   				<li className={classes.signUp} onClick={showSignInModal}><a href="#">Sign In</a></li>
	    		</ul>
	}

	if(profileMenu.isProfileMenuShown){
		profileMenuComp = <ProfileMenu profileMenuHandler={profileMenuHandler} />
	}
	
  return (
  	<div>
	    <div className={classes.layoutWrapper}>
	    	{topMenu}
	    	{profileMenuComp}
	    </div>
	    {modal}
    	{props.children}
    	<div id="formCover2"></div>
    </div>	
  );
}

export default Layout;
