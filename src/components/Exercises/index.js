import React, { useState } from "react";
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

import { withStyles } from "@material-ui/core/styles";

import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";

import Form from "./Form";

const styles = theme => ({
  Paper: {
    padding: theme.spacing.unit * 2,
    overflowY: "auto",
    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 64px - 48px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "calc(50vh - 28px - 24px)"
    },
    "@global": {
      "html, body, #root": {
        height: "100%"
      }
    },
    Container: {
      height: "100%"
    }
  }
});

export default withStyles(styles)(
  ({
    classes,
    exercises,
    category,
    onSelect,
    onDelete,
    onEdit,
    muscles,
    onCreate,
    onEditSelect,
    exercise
  }) => {
    const [editMode, setEditMode] = useState(false);

    const saveEdit = id => {
      setEditMode(false);

      onEdit(id);
    };
    const editSelected = id => {
      onEditSelect(id);
      setEditMode(true);
    };

    const deleteSelected = id => {
      onDelete(id);

      if (exercise.id === id) setEditMode(false);
    };

    const itemSelected = id => {
      onSelect(id);
      setEditMode(false);
    };

    const {
      title = "Welcome!",
      description = "Please select an exercise on the left."
    } = exercise;

    return (
      <Grid container className={classes.Container}>
        <Grid item xs={12} sm={6}>
          {/* <LeftPane styles={styles} /> */}
          <Paper className={classes.Paper}>
            {exercises.map(([group, exercises]) => {
              return !category || category === group ? (
                <div key={group}>
                  <Typography
                    variant="h5"
                    style={{ textTransform: "capitalize" }}
                  >
                    {group}
                  </Typography>
                  <List component="ul">
                    {exercises.map(({ title, id }) => {
                      return (
                        <ListItem
                          onClick={() => itemSelected(id)}
                          key={title}
                          button
                        >
                          <ListItemText primary={title} />
                          <ListItemSecondaryAction>
                            <IconButton onClick={() => deleteSelected(id)}>
                              <Delete />
                            </IconButton>
                            <IconButton onClick={() => editSelected(id)}>
                              <Edit />
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
        <Grid item xs={12} sm={6}>
          <Paper className={classes.Paper}>
            {editMode ? (
              <Form
                editMode
                setEditMode={setEditMode}
                exercise={exercise}
                onCreate={onCreate}
                onSaveEdit={saveEdit}
                muscles={muscles}
              />
            ) : (
              <>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="subtitle1">{description}</Typography>
              </>
            )}
          </Paper>
        </Grid>
      </Grid>
    );
  }
);
