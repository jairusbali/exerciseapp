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

const formattedExercises = exercises => {
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

const app = props => {
  const { classes } = props;

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedExerciseId, setSelectedExerciseId] = useState("");

  const [allExercises, setAllExercises] = useState(exercises);

  // const allExercises = getExercises(exercises);
  // console.log(allExercises);

  // changed id -> title
  const getExercise = id => {
    return allExercises.find(exercise => exercise.id === id);
  };

  const onCreateExerciseHandler = exercise => {
    const updatedExerciseList = [...allExercises, exercise];

    console.log(updatedExerciseList);
    setAllExercises(updatedExerciseList);
  };

  useEffect(() => {}, [selectedCategory, selectedExerciseId]);

  const formattedExerciseList = formattedExercises(allExercises);

  return (
    <div>
      <Header muscles={muscles} onCreateExercise={onCreateExerciseHandler} />
      <Exercises
        exercise={selectedExerciseId ? getExercise(selectedExerciseId) : {}}
        onSelect={setSelectedExerciseId}
        category={selectedCategory}
        exercises={formattedExerciseList}
      />

      <Footer
        muscles={muscles}
        category={selectedCategory}
        onSelect={setSelectedCategory}
      />
    </div>
  );
};

export default withStyles(styles)(app);
