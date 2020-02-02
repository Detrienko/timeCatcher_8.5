import * as actionTypes from './actionsTypes';

export const addBusiness = (data) => {
	return{
		type: actionTypes.ADD_BUSINESS,
		data: data
	}
}

export const switchBusinessTab = (id) => {
	return{
		type: actionTypes.SWITCH_BUSINESS_TAB,
		id: id	
	}
}

export const saveCurrentStopwatchTime = (time, id, timerTime) => {
	return{
		type: actionTypes.SAVE_CURRENT_STOPWATCH_TIME,
		time: time,
		id: id,
		timerTime: timerTime
	}
}

export const clearCurrentStopwatchTime = (id) => {
	return{
		type: actionTypes.CLEAR_CURRENT_STOPWATCH_TIME,
		id: id	
	}
}

export const saveTimerTime = (currentCountdownTime, timerTimeCountDown, currentMiniStopwatchTime, miniTimerTime, id) => {
	return{
		type: actionTypes.SAVE_TIMER_TIME,
		currentCountdownTime: currentCountdownTime,
		timerTimeCountDown: timerTimeCountDown,
		currentMiniStopwatchTime: currentMiniStopwatchTime,
		miniTimerTime: miniTimerTime,
		id: id
	}
}

export const clearCurrentCountDownTime = (id) => {
	return{
		type: actionTypes.CLEAR_CURRENT_COUNTDOWN_TIME,
		id: id,
	}
}

export const stopWatchOrCountDownIsShownHandler = (id, countDownOrStopwatch) => {
	return{
		type: actionTypes.STOPWATCH_OR_COUNTDOWN_IS_SHOWN_HANDLER,
		countDownOrStopwatch: countDownOrStopwatch,
		id: id,
	}
}

export const deleteBusiness = (id) => {
	return{
		type: actionTypes.DELETE_BUSINESS,
		id: id,
	}
}

export const addWorkingHours = (id) => {	
	return{
		type: actionTypes.ADD_WORKING_HOURS,
		id: id,
	}
}

export const saveCurrentMiniStopwatchTime = (time, id, timerTime) => {
	return{
		type: actionTypes.SAVE_CURRENT_MINI_STOPWATCH_TIME,
		time: time,
		id: id
	}
}

export const increaseTimer = (increaseBy, id) => {
	return{
		type: actionTypes.INCREASE_TIMER,
		increaseBy: increaseBy,
		id: id
	}
}

// STOPWATCH 

export const updateStopwatch = (stopWatchData, id) => {
	return{
		type: actionTypes.UPDATE_STOPWATCH,
		stopWatchData: stopWatchData, 
		id: id
	}
}

export const clearStopwatch = (id) => {
	return{
		type: actionTypes.CLEAR_STOPWATCH,
		id: id
	}
}

export const saveTimerId = (timerId, id) => {
	return{
		type: actionTypes.SAVE_TIMER_ID,
		timerId: timerId, 
		id: id
	}
}