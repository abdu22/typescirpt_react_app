
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField, Card} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {useState} from 'react';


const useStyles = makeStyles({
  root: {
    width: "250px",
    height: "300px",
    margin: "2px"
  },
  text : {
     alignItems: "stretch",
     margin: "20px"
  }
});

type Props = {
   setName : (name: string) => void
}


export default function Home(props : Props) :JSX.Element {
  const classes = useStyles();
    return (
        <div className="App">
          <header className="App-header">

          <Card className={classes.root} raised={true}> 

          <TextField className={classes.text} label="Name" variant="outlined" 
            onChange={(event) => props.setName(event.target.value)}/>
            
          </Card> 
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header> 
        </div>
      );
}