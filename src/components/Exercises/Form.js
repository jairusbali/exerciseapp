import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const initialExerciseState = {
  title: "",
  description: "",
  muscles: "",
  id: ""
};

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const form = props => {
  const {
    classes,
    exercise,
    open,
    setOpen,
    editMode,
    onCreateExercise,
    onSaveEdit,
    muscles
  } = props;

  const [exerciseInfo, setExercise] = useState(initialExerciseState);

  // updates form when editing
  useEffect(() => {
    open ? setExercise(initialExerciseState) : setExercise(exercise);
  }, [exercise, open]);

  // identifier for the "select" component
  const handleChange = (event, identifier) => {
    const exercise = { ...exerciseInfo };

    identifier
      ? (exercise[event.target.name] = identifier.key)
      : (exercise[event.target.name] = event.target.value);

    setExercise(exercise);
  };

  const handleModalSubmit = () => {
    const currExercise = {
      ...exerciseInfo,
      id: exerciseInfo.title.toLowerCase().replace(/ /g, "-")
    };
    onCreateExercise(currExercise);

    // close modal and set exercise state to initial state
    setExercise(initialExerciseState);
    setOpen(false);
  };

  const saveEdit = () => {
    onSaveEdit(exerciseInfo);
  };

  const disableButton = !exerciseInfo.title || !exerciseInfo.muscles;

  return (
    <form>
      <FormControl margin="normal" required fullWidth>
        <TextField
          name="title"
          label="Title"
          onChange={handleChange}
          margin="normal"
          value={exerciseInfo.title}
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel>Muscle group</InputLabel>
        <Select
          value={exerciseInfo.muscles}
          name="muscles"
          onChange={handleChange}
        >
          {muscles.map(category => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <TextField
          name="description"
          label="Description"
          multiline
          rows={4}
          onChange={handleChange}
          margin="normal"
          value={exerciseInfo.description}
        />
      </FormControl>

      {editMode ? (
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => saveEdit()}
          color="secondary"
          disabled={disableButton}
        >
          Save
        </Button>
      ) : (
        <>
          <Button
            className={classes.button}
            variant="contained"
            onClick={() => setOpen(false)}
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            onClick={handleModalSubmit}
            color="secondary"
            disabled={disableButton}
          >
            Add
          </Button>
        </>
      )}
    </form>
  );
};

export default withStyles(styles)(form);
