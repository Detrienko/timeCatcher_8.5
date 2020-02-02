import * as actionTypes from './actionsTypes';
import firebase from '../../config/fbConfig';

  const fetchBusinessDataSuccess = (userBusinesses) => 
      ({
      type: actionTypes.FETCH_BUSINESSDATA_SUCCESS,
      userBusinesses: userBusinesses
      })

  function fetchBusinessDataError(error){
    return{
      type: actionTypes.FETCH_BUSINESSDATA_FAILURE,
      error: error
    }   
  };

export function fetchBusinessDataBegin(userId) {
  return dispatch => {
    let docRef = firebase.firestore().collection("Users").doc(userId);
    docRef.get().then(function(doc) {
      if (doc.exists) {
        dispatch(fetchBusinessDataSuccess(doc.data()))
        console.log("Document data:", doc.data());
      }
  }).catch(function(error) {
      return dispatch => {
        dispatch(fetchBusinessDataError(error))
      }
      console.log("Error getting document:", error);
  });
  }
}

export function clearState(){
  return {
    type: actionTypes.CLEAR_STATE
  }
}




