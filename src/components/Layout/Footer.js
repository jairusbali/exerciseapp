import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import withWidth from "@material-ui/core/withWidth";

const footer = ({ muscles, category, onSelect, width }) => {
  const index = category ? muscles.findIndex(elem => elem === category) + 1 : 0;
  const onIndexSelect = (event, index) => {
    onSelect(index === 0 ? "" : muscles[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        onChange={onIndexSelect}
        value={index}
        indicatorColor="primary"
        textColor="primary"
        centered={width !== "xs"}
        variant={width === "xs" ? "scrollable" : "standard"}
      >
        <Tab label="All" />;
        {muscles.map(muscle => {
          return <Tab key={muscle} label={muscle} />;
        })}
      </Tabs>
    </Paper>
  );
};

export default withWidth()(footer);
