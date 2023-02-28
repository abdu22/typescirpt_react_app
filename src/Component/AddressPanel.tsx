
import React from 'react';
import type { Address } from '../App';
import { Card , InputLabel} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
    address: Address,
}

const useStyles = makeStyles({
    root: {
      width: "250px",
      height: "200px",
      margin: "2px"
    },
    text : {
       alignItems: "stretch",
       margin: "20px"
    }
  });

export default function AddressPanel(props: Props): JSX.Element{
    const classes = useStyles();
    return (
          <Card className={classes.root}>
          <h3>Address</h3>
          <InputLabel className={classes.text}>City: {props.address.city}</InputLabel>
          <InputLabel className={classes.text}>State: {props.address.state}</InputLabel>

        </Card>
    );
}
