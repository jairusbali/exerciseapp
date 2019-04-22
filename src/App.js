import React, { useState, useEffect } from "react";

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
  // create an array of arrays
  // key is a muscle group and value is an array
  // of exercises for that muscle
  const initialExercises = muscles.reduce((acc, curr) => {
    return { ...acc, [curr]: [] };
  }, {});

  return Object.entries(
    exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;

      exercises[muscles] = [...exercises[muscles], exercise];

      return exercises;
    }, initialExercises)
  );
};

const app = props => {
  const { classes } = props;

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedExerciseId, setSelectedExerciseId] = useState("");

  const [allExercises, setAllExercises] = useState(exercises);

  // const allExercises = getExercises(exercises);
  // console.log(allExercises);

  const getExercise = id => {
    return allExercises.find(exercise => exercise.id === id);
  };

  const deleteExerciseHandler = id => {
    // get the id
    const updatedList = allExercises.filter(elem => {
      return elem.id !== id;
    });

    // reset selectedExerciseId
    if (id === selectedExerciseId) setSelectedExerciseId("");
    setAllExercises(updatedList);
  };

  const onCreateExerciseHandler = exercise => {
    const updatedExerciseList = [...allExercises, exercise];

    setAllExercises(updatedExerciseList);
  };

  const exerciseSelectEditHandler = id => {
    setSelectedExerciseId(id);
  };

  const onEditHandler = exercise => {
    // get all exercises NOT being edited
    const exercisesNotBeingEdited = allExercises.filter(ex => {
      return ex.id !== exercise.id;
    });

    // append the newly edited exercise to the set
    // i.e. adding new edited item
    setAllExercises([...exercisesNotBeingEdited, exercise]);
  };

  const formattedExerciseList = formattedExercises(allExercises);

  return (
    <div>
      <Header muscles={muscles} onCreateExercise={onCreateExerciseHandler} />
      <Exercises
        muscles={muscles}
        onDelete={deleteExerciseHandler}
        onEditSelect={exerciseSelectEditHandler}
        onEdit={onEditHandler}
        onCreate={onCreateExerciseHandler}
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
