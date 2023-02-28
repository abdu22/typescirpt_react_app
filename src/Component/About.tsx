import React from 'react';
import { Card, Divider, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import type {Address} from '.././App';

const useStyles = makeStyles({
    root: {
      //width: "250px",
      margin: "20px",
      padding: "10px"

    }
  });

type Props = {
    name: string,
    children: JSX.Element
}
 export default function About(props : Props) {
    const classes = useStyles();
    return (
        <div>
          <Card className={classes.root}>
             <h2>About</h2>
                His Name is : <Chip label={props.name}/> 
             <Divider style={{margin : "20px"}}/>
             {props.children}
            </Card>  
            
        </div>
    );
}