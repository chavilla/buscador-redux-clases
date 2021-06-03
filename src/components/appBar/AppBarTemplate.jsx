import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import AutoCompleteComponent from "../autoComplete/AutoCompleteComponent";
import "./AppBarStyles.css";

const AppBarTemplate = ({
  text,
  suggestions,
  onChangeText,
  onChangeSelection,
}) => {
  return (
    <AppBar position="static" className="appbar">
      <Toolbar className="appbar">
        <Typography variant="h6" color="inherit">
          Programax
        </Typography>
        <AutoCompleteComponent
          text={text}
          suggestions={suggestions}
          onChangeText={onChangeText}
          onChangeSelection={onChangeSelection}
        />
        <AccountCircle />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarTemplate;
