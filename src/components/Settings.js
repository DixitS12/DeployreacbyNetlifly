import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { Settings as Setting } from "@material-ui/icons";
import React, { useState } from "react";
//import ColorSetter from "../common/settings/color_picker";
import useStyles from "../css/NavStyle";

export default function Settings() {
  const classes = useStyles();
  const [openModel, setOpenModel] = React.useState(null);

  const handleClick = (e) => {
    setOpenModel(e.currentTarget);
  };
  const handleClose = () => {
    setOpenModel(null);
  };
  return (
    <div>
      <IconButton onClick={handleClick} className={classes.headerMenuButton}>
        <Setting className={classes.headerIcon} />
      </IconButton>
      <Menu
        className={classes.headerMenu}
        open={Boolean(openModel)}
        anchorEl={openModel}
        onClose={handleClose}
       
      >
        <MenuItem className="cl-pk-li">
          {/*<ColorSetter />*/}
        </MenuItem>
      </Menu>
    </div>
  );
}
