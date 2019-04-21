import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import Add from "@material-ui/icons/Add";

import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

import TextField from "@material-ui/core/TextField";

import Form from "../Form";

const initialExerciseState = {
  exercise: {
    title: "",
    description: "",
    muscles: "",
    id: ""
  }
};

export default props => {
  const [isOpen, setOpen] = useState(false);

  const [exerciseInfo, setExercise] = useState(initialExerciseState);

  const { muscles, onCreateExercise } = props;

  // identifier for the "select" component
  const handleChange = (event, identifier) => {
    const { exercise } = { ...exerciseInfo };

    if (identifier) {
      exercise[event.target.name] = identifier.key;
    } else {
      exercise[event.target.name] = event.target.value;
    }
    setExercise({ exercise });
  };

  const handleSubmit = () => {
    const { exercise } = { ...exerciseInfo };
    const currExercise = {
      ...exercise,
      id: exercise.title.toLowerCase().replace(/ /g, "-")
    };

    onCreateExercise(currExercise);

    // close modal and set exercise state to initial state
    setExercise(initialExerciseState);
    setOpen(false);
  };

  return (
    <div>
      <Fab color="primary" onClick={() => setOpen(true)}>
        <Add />
      </Fab>
      <Dialog
        open={isOpen}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create new exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Fill out the form below.</DialogContentText>
          <Form
            handleChange={handleChange}
            muscles={muscles}
            selectedMuscleGroup={exerciseInfo.exercise.muscles}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            color="primary"
          >
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
