import React from 'react';
import { Card } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      width: "250px",
      margin: "20px"
    }
  });

type Props = {
    name: string
}
 export default function About(props : Props) {
    const classes = useStyles();
    return (
        <div>
            <h2>About</h2>
            <Card className={classes.root} raised={true}> 
                His Name is : {props.name}
              </Card> 
        </div>
    );
}