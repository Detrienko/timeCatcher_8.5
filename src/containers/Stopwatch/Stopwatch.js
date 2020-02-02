import React, { Component } from 'react';

import Button from '../../components/Button/Button';
import classes from './Stopwatch.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/businessBuilder';

class Stopwatch extends Component {

  startTimer = () => {

  if(this.props.businessData.timerTime == 0){

    this.props.updateStopwatch({
      timerOn: true,
      timerStart: Date.now() - this.props.businessData.timerTime
    }, this.props.businessData.id)
  }
  else{

    this.props.updateStopwatch({
      timerOn: true,
      timerTime: this.props.businessData.timerTime,
      timerStart: Date.now() - this.props.businessData.timerTime
    }, this.props.businessData.id)

  }

  this.props.saveTimerId(setInterval(()=> {

    this.props.updateStopwatch({
      timerTime: Date.now() - this.props.businessData.timerStart,
    }, this.props.businessData.id)

  }, 10), this.props.businessData.id
  )

  }

  stopTimer = () => {

   clearInterval(this.props.businessData.timerId);

    this.props.updateStopwatch({
      timerOn: false,
    }, this.props.businessData.id)
  }

  resetTimer = () => {
    if(this.props.businessData.timerOn === false){
       this.props.clearStopwatch(this.props.businessData.id);
    }
    else {
      alert('Stop timer');
    }
  }


  render() {


  let index = this.props.business.findIndex((el)=>el.id==this.props.businessData.id);  

  let centiseconds = this.props.business[index].currentStopwatchTime.centiseconds;
	let seconds = this.props.business[index].currentStopwatchTime.seconds;
	let minutes = this.props.business[index].currentStopwatchTime.minutes;
	let hours = this.props.business[index].currentStopwatchTime.hours;

  let stopwatch;  
    if(this.props.isShown){     
      stopwatch = <div className={classes.stopwatch}>
        <div className={classes.stopwatchHeader}>Stopwatch</div>
        <p className={classes.stopwatchTime}>{hours} : {minutes} : {seconds} : {centiseconds}</p>

        {this.props.business[index].timerOn === false && (
          <button className={`${classes.timerBtn} ${classes.startBtn}`} onClick={this.startTimer}>START</button>
          )}
        {this.props.business[index].timerOn === true && (
          <button className={`${classes.timerBtn} ${classes.stopBtn}`} onClick={this.stopTimer}>STOP</button>
          )}
        <button className={`${classes.timerBtn}`} onClick={this.resetTimer}>RESET</button>
      </div>
    }

    return (
      <div>
        {stopwatch}
      </div>
    );

  }
}

  const mapStateToProps = state => {
    return {
      business: state.businessList.business,
    }
  }

  const mapDispatchToProps = dispatch => {
    return{
      saveCurrentStopwatchTime: (time, id, timerTime) => dispatch(actions.saveCurrentStopwatchTime(time, id, timerTime)),
      clearStopwatch: (id) => dispatch(actions.clearStopwatch(id)),
      updateStopwatch: (obj, id) => dispatch(actions.updateStopwatch(obj, id)),
      saveTimerId: (timerId, id) => dispatch(actions.saveTimerId(timerId, id))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);

