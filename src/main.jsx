import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

    mainContainer: {
        display: "flex",
        flexDirection: "column",
        width: "95vw", 
        height: "400px",
        backgroundColor: "white",
        margin: "20px auto"

    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '30px 15px'
    },

    datePickerContainer: {
        display: "flex",
        marginLeft: "0",
        marginTop: '10px',
        padding:'10px',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    mainButton: {
        display: 'flex',
        padding: '15px',
        marginTop: '20px'
    },
    outlineButton: {
        color:'#4698ce',
    }
}));

export default function DatePickers() {
  const classes = useStyles();

  return (

    <div>
      <div className = {classes.mainContainer}>
          <div className = {classes.header}>
              <div>
                  RI Tracker
              </div>
              <div>
          <Button variant="outlined" className = {classes.outlineButton} >
        AWS
      </Button>
      <Button variant="outlined" className = {classes.outlineButton} >
        Azure
      </Button>
      </div>
      <div>
          GUIDED TOUR
      </div>
          </div>
          <div className = {classes.datePickerContainer}>
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Start Date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    <form className={classes.container} noValidate>
    <TextField
      id="date"
      label="End Date"
      type="date"
      defaultValue="2017-05-24"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
  </form>
  </div>

  <div className = {classes.mainButton}>

  <Button variant="contained"  style = {
      {
         
          marginRight: '15px',
          backgroundColor: '#4698ce',
          color: 'white'
          
      }
  } >
        Apply
      </Button>
      <Button variant="contained" style = {
          {
              backgroundColor: '#4698ce',
              color: 'white'
          }
      }>
        Download
      </Button>
      
      </div>
    
      
  </div>

  <div className = {classes.mainContainer}>
      hello
  </div>

  </div>
  );
}
