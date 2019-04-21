import React, { useState, useEffect } from "react";

import "./App.css";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { withStyles } from "@material-ui/core/styles";

import { Header, Footer } from "./components/Layout/";

import Exercises from "./components/Exercises/";

import { muscles, exercises } from "./store";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "10px"
  },
  content: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    margin: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  }
});

const getExercises = exercises => {
  return Object.entries(
    exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;

      exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], exercise]
        : [exercise];

      return exercises;
    }, {})
  );
};

// added this comment for pull request
const getExercise = id => {
  return exercises.find(exercise => exercise.id === id);
};

const app = props => {
  const { classes } = props;

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedExerciseId, setSelectedExerciseId] = useState("");

  const allExercises = getExercises(exercises);
  console.log(allExercises);

  useEffect(() => {
    console.log("selectedCategory", selectedCategory);
    console.log("selectedExerciseId", selectedExerciseId);
  }, [selectedCategory, selectedExerciseId]);

  return (
    <>
      <Header muscles={muscles} />
      <Exercises
        exercise={selectedExerciseId ? getExercise(selectedExerciseId) : {}}
        onSelect={setSelectedExerciseId}
        category={selectedCategory}
        exercises={allExercises}
      />

      <Footer
        muscles={muscles}
        category={selectedCategory}
        onSelect={setSelectedCategory}
      />
    </>
  );
};

export default withStyles(styles)(app);
