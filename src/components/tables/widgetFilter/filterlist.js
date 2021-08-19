import React, { useContext } from "react";
import {
  Grid,
  Popover,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  Box
} from "@material-ui/core";
import { Search, FilterList } from '@material-ui/icons';
import useStyles from "../styles";
import * as notification from "../toast";
import { flexbox } from '@material-ui/system';

import CustomTextField from "./controls/input";
import MaterialUIPickers from "./controls/date_picker";
import CustomSelect from "./controls/select";
import Tooltip from '@material-ui/core/Tooltip';

export default function FilterWidget({ columns }) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  var classes = useStyles();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };



  const handleFilterSubmit = (event) => {
    event.preventDefault();
    let fields = {};
    var submitted = true;
    Object.entries(event.target.elements).forEach(([name, input]) => {
      if (input.type != "submit") {
        if (input.name !== "" && input.value !== "") {
          submitted = true;
          fields[input.name] = input.value;
        }
      }
    });
    if (submitted == true && fields !== undefined) {
      notification.toast.success("Filter Apply successfully..!!!");
      // fire api
    }
  };

  // json data for dynamic column
  const fieldHandler = (field) => {
    switch (field.type) {
      case "text":
        return (
          <CustomTextField field={field} />
        );
      case "select":
        return (
          <CustomSelect field={field} />
        );
      case "date":
        return (
          <MaterialUIPickers field={field} />
        );
      default: return (
        <Typography variant="h6" gutterBottom>
          {field.type + ' of ' + field.dataField} control not bind.
        </Typography>
      );
    }
  }
  var style = {
    'marginBottom': '1rem',
  }
  return (
    <React.Fragment>
      <Tooltip title="Filter Search"><span> <IconButton
        aria-label="filter"
        onClick={handleOpen}
      >
        <FilterList style={{ cursor: "pointer" }} />
      </IconButton></span></Tooltip>


      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <form onSubmit={handleFilterSubmit} className={classes.widgetBody}>
          <div id="action-body" className={classes.actionbody}>
            {
              columns
                ?
                columns.map((field, index) => (
                  field.is_filter && <div key={index} style={{ style }}>{fieldHandler(field, index)}</div>

                ))
                :
                []
            }
          </div>
          <div id="action-button">
            <Box display="flex " justifyContent="space-between">
              <Button
                type="reset"
                variant="contained"
                color="danger"
                className={classes.mr_one}
                onClick={handleClose}
              >
                Cancel
              </Button>

              <Button
                type="reset"
                variant="contained"
                color="secondary"
                className={classes.mr_one}
              >
                Reset
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"

              >
                Search
              </Button>
            </Box>
          </div>
        </form>
      </Popover>
    </React.Fragment>
  );
}
