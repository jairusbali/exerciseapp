import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import CreateDialog from "../Exercises/Create";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const header = props => {
  const { classes, onCreateExercise } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Workouts
        </Typography>
        <CreateDialog
          muscles={props.muscles}
          onCreateExercise={onCreateExercise}
        />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(header);
