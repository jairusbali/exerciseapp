import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import Add from "@material-ui/icons/Add";

import Form from "./Form";

export default props => {
  const { muscles, onCreateExercise } = props;
  const [isOpen, setOpen] = useState(false);
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
            onCreateExercise={onCreateExercise}
            setOpen={setOpen}
            open
            muscles={muscles}
          />
        </DialogContent>
        <DialogActions />
      </Dialog>
    </div>
  );
};
