import React from 'react';
import classes from './Clock.module.css';
import {Paper, Grid, Typography} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';



function ClockDisplay (props){
    return(
        <>
            <Paper  style={{backgroundColor: '#263238', height: '100vh'}}>
                <Grid container>
                    <Grid style={{marginTop: '3%', marginBottom: '3%'}} item xs={12}>
                        <Typography color='primary' variant='h4'>Pomodoro Clock</Typography>  
                    </Grid>
                    <Grid style={{marginTop: '3%'}} item xs={12} sm={6}>
                        <Typography color='primary' variant='h5'>
                            Break Length
                            <Typography className={classes.typo} style={{marginTop: '0.1em'}} color='primary' variant='h4'>
                                <ArrowDownwardIcon onClick={props.handleBreakLengthDecrement} className={classes.icon} style={{fontSize: "2.125rem", marginRight: '0.5em'}}/>
                                {props.breakLength}
                                <ArrowUpwardIcon onClick={props.handleBreakLengthIncrement} className={classes.icon} style={{fontSize: "2.125rem",  marginLeft: '0.5em'}}/>
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid style={{marginTop: '3%'}} item xs={12} sm={6}>
                        <Typography color='primary' variant='h5'>
                            Session Length
                            <Typography className={classes.typo} style={{marginTop: '0.1em'}} color='primary' variant='h4'>
                                <ArrowDownwardIcon onClick={props.handleSessionLengthDecrement} className={classes.icon} style={{fontSize: "2.125rem",  marginRight: '0.5em'}}/>
                                {props.sessionLength}
                                <ArrowUpwardIcon onClick={props.handleSessionLengthIncrement} className={classes.icon} style={{fontSize: "2.125rem",  marginLeft: '0.5em'}}/> 
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid   style={{marginTop: '2%'}} item xs={12}>
                        <div  className={classes.session}>
                            <Typography color={props.changeColor ? 'secondary' : 'primary'} variant='h5' >{props.sessionType}</Typography> 
                            <Typography color={props.changeColor ? 'secondary' : 'primary'} variant='h2' >{props.timeLeft}</Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div >{
                               props.isStarted ?
                               <PauseIcon onClick={props.hanldeStartClick} className={classes.sessionIcons} style={{fontSize: '3rem'}} /> :
                               <PlayArrowIcon onClick={props.hanldeStartClick} className={classes.sessionIcons} style={{fontSize: '3rem'}} />
                            }
                            <SettingsBackupRestoreIcon onClick={props.handleResetClick} className={classes.sessionIcons} style={{fontSize: '3rem'}} />

                        </div>
                    </Grid>

                    
                </Grid>
            </Paper>
        </>
    )
}
export default ClockDisplay;