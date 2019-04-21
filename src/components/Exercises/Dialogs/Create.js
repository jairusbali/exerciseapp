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

export default props => {
  const [isOpen, setOpen] = useState(false);

  const [exerciseInfo, setExercise] = useState({
    exercise: {
      title: "",
      description: "",
      muscles: ""
    }
  });

  const { muscles } = props;

  // const {
  //   exercise: { muscles }
  // } = { exerciseInfo };

  const handleChange = event => {
    const { exercise } = { ...exerciseInfo };

    exercise[event.target.name] = event.target.value;
    setExercise({ exercise });
  };

  return (
    <div>
      <Button variant="fab" color="primary" mini onClick={() => setOpen(true)}>
        <Add />
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create new exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Fill out the form below.</DialogContentText>
          <form>
            <FormControl margin="normal" required fullWidth>
              <TextField
                required
                name="title"
                id="standard-required"
                label="Required"
                placeholder="placeholder"
                onChange={handleChange}
                margin="normal"
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="muscles">Muscles</InputLabel>
              <Select value={muscles} onChange={handleChange}>
                {muscles.map(category => (
                  <MenuItem value={category}>{category}</MenuItem>
                ))}
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <TextField
                required
                name="description"
                id="standard-required"
                label="Required"
                multiline
                placeholder="description"
                onChange={handleChange}
                margin="normal"
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
