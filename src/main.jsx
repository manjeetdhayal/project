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
        backgroundColor: "red",
        margin: "0 auto"

    },

    header: {
        display: 'flex'
    },

    datePickerContainer: {
        display: "flex",
        marginLeft: "0"
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
        padding: '5px',
        marginTop: '20px'
    }
}));

export default function DatePickers() {
  const classes = useStyles();

  return (
      <div className = {classes.mainContainer}>
          <div className = {classes.header}>
              <div>
          <Button variant="outlined" color="primary">
        AWS
      </Button>
      <Button variant="outlined" color="primary">
        Azure
      </Button>
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

  <Button variant="contained" color = "primary" style = {
      {
         
          marginRight: '15px'
          
      }
  } >
        Apply
      </Button>
      <Button variant="contained" color="primary">
        Download
      </Button>
      
      </div>
  </div>
  );
}
