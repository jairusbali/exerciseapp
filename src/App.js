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

  // changed id -> title
  const getExercise = id => {
    return allExercises.find(exercise => exercise.id === id);
  };

  const deleteExerciseHandler = id => {
    // get the id
    const updatedList = allExercises.filter(elem => {
      return elem.id !== id;
    });

    // reset selectedExerciseId
    setSelectedExerciseId("");
    setAllExercises(updatedList);
  };

  const onCreateExerciseHandler = exercise => {
    const updatedExerciseList = [...allExercises, exercise];

    setAllExercises(updatedExerciseList);
  };

  const onEditHandler = id => {
    setSelectedExerciseId(id);
  };

  useEffect(() => {}, [selectedCategory, selectedExerciseId]);

  const formattedExerciseList = formattedExercises(allExercises);

  return (
    <div>
      <Header muscles={muscles} onCreateExercise={onCreateExerciseHandler} />
      <Exercises
        onDelete={deleteExerciseHandler}
        onEdit={onEditHandler}
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
