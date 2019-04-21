import React from "react";
import {
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";

import Delete from "@material-ui/icons/Delete";

const styles = {
  Paper: {
    padding: 20,
    margin: 10,
    height: 500,
    overflowY: "auto"
  }
};

export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    exercise,
    title = "Welcome!",
    description = "Please select an exercise on the left."
  }
}) => (
  <Grid container>
    <Grid item xs={6}>
      {/* <LeftPane styles={styles} /> */}
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) => {
          return !category || category === group ? (
            <div key={group}>
              <Typography
                variant="headline"
                style={{ textTransform: "capitalize" }}
              >
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({ title, id }) => {
                  return (
                    <ListItem onClick={() => onSelect(id)} key={title} button>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton>
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
              </List>
            </div>
          ) : null;
        })}
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper style={styles.Paper}>
        <Typography variant="display1">{title}</Typography>
        <Typography variant="subheading">{description}</Typography>
      </Paper>
    </Grid>
  </Grid>
);
