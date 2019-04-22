import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import withWidth from "@material-ui/core/withWidth";

const footer = ({ muscles, category, onSelect, width }) => {
  const index = category ? muscles.findIndex(elem => elem === category) + 1 : 0;
  const onIndexSelect = (event, index) => {
    onSelect(index === 0 ? "" : muscles[index - 1]);
  };

  return (
    <AppBar position="static">
      <Tabs
        onChange={onIndexSelect}
        value={index}
        indicatorColor="secondary"
        textColor="secondary"
        centered={width !== "xs"}
        variant={width === "xs" ? "scrollable" : "standard"}
      >
        <Tab label="All" />;
        {muscles.map(muscle => {
          return <Tab key={muscle} label={muscle} />;
        })}
      </Tabs>
    </AppBar>
  );
};

export default withWidth()(footer);
