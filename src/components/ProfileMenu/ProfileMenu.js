import React, {useState, useEffect, useContext} from 'react';
import classes from './ProfileMenu.module.css';
import firebase from '../../config/fbConfig';
import {AuthContext} from '../../Auth';


function ProfileMenu(props){

	const contextObj = useContext(AuthContext);

	const signOutHandler = () => {
		contextObj.signOut();
		props.profileMenuHandler();
	}



	return(
		<div className={classes.profileMenu}>
			<ul>
				<li>My Profile</li>
				<li onClick={signOutHandler}>Sign out</li>
			</ul>
		</div>
		)
}

export default ProfileMenu;