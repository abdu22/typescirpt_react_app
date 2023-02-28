
import React, { useEffect } from 'react';
import logo from './logo.svg';
import {Address} from '.././App';
import './App.css';
import { TextField, Card, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {useState} from 'react';
 
const useStyles = makeStyles({
  root: {
    width: "250px",
    height: "350px",
    margin: "2px"
  },
  text : {
     alignItems: "stretch",
     margin: "20px"
  },
  button : { 
    marginBottom: "20px",
    alignItems: "bottom"
  }
});

type Props = {
   setName : (name: string) => void
   name: string,
   address: Address,
   setAddress: (address: Address) => void,
}


export default function Home(props : Props) :JSX.Element {
  const classes = useStyles();
    return (
        <div className="App">
          <header className="App-header">

          <Card className={classes.root} raised={true}> 

          <TextField className={classes.text} label="Name" variant="outlined"  value={props.name}
            onChange={(event) => props.setName(event.target.value)}/>
         <TextField className={classes.text} label="City" value={props.address.city} onChange={ (event) => {props.setAddress({
          ...props.address,
          city: event.target.value
         })}}/>

         <TextField className={classes.text} label="State" value={props.address.state} onChange={(event) => {props.setAddress({
          ...props.address,
          state: event.target.value
         })}}/>

           <Button variant="contained" color="primary" onClick={() => { 
             props.setName("") ;
             props.setAddress({city:"", state: ""}); 
             } } >
            Clear
            </Button> 
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