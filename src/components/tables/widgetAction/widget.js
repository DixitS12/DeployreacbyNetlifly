import React, { useState, useEffect } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Fab,
  Box
} from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import { MoreVert as MoreIcon, Cancel, AddOutlined, ArrowDownward, KeyboardTabOutlined, ArrowRightAltOutlined, CheckCircleOutlineOutlined, CloseOutlined, ExitToAppOutlined, NotificationsActiveOutlined } from "@material-ui/icons";
import * as notification from "../toast";

export default function WidgetActions({
  isSelected,
  isSelectedRow,
  selectedAction,
  setSelectedAction,
}) {


  // local
  var [moreButtonRef, setMoreButtonRef] = useState(null);
  var [isMoreMenuOpen, setMoreMenuOpen] = useState(false);

  useEffect(() => {
    if (selectedAction) {
      const interval = setInterval(() => {
        setSelectedAction("");
        notification.toast.success("Action Reset after 15 sec..!");
      }, 10000);
      return () => clearInterval(interval);
    }

  }, [isSelected, isSelectedRow, selectedAction])



  const handleSelectedAction = (selected_action) => {
    if (isSelected === true) {
      setMoreMenuOpen(false)
      setSelectedAction(selected_action)
    } else {
      notification.toast.error(" Please Select Row..!!!");
    }
  };
  return (
    <React.Fragment>
      <Box display="inline-flex">
        {
          selectedAction
            ?
            <Typography>
              <Fab
                variant={selectedAction}
                size="medium"
                color="dark"
                aria-label="add"
                boxShadow={0}
              >
                <Cancel style={{ 'marginRight': '8px' }} onClick={(e) => setSelectedAction("")} />
                {selectedAction}
              </Fab>
            </Typography>
            :
            null

        }
        <Tooltip title="Hide/Show Columns"><span>
          <IconButton onClick={() => setMoreMenuOpen(true)}
            buttonRef={setMoreButtonRef}
            aria-label="Hide/Show Columns"
          >

            <MoreIcon style={{ cursor: "pointer" }} />

          </IconButton></span>

        </Tooltip>

      </Box>
      <Menu
        id="widget-menu"
        open={isMoreMenuOpen}
        anchorEl={moreButtonRef}
        onClose={() => setMoreMenuOpen(false)}
        disableAutoFocusItem
      >
        <MenuItem onClick={() => handleSelectedAction('Take Ownership')} >
          <Typography> <ArrowDownward color={'primary'} />Take Ownership</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction('Approve & Return Items')}>
          <Typography><CheckCircleOutlineOutlined color={'primary'} />Approve & Return Items</Typography>
        </MenuItem >
        <MenuItem onClick={() => handleSelectedAction('Decline & Return Items')}>
          <Typography><CloseOutlined color={'primary'} />Decline & Return Items</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction('Resolve Items')}>
          <Typography><ExitToAppOutlined color={'primary'} />Resolve Items</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction('Set Alert')}>
          <Typography><NotificationsActiveOutlined color={'primary'} />Set Alert</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction('Assign Items')}>
          <Typography><ArrowRightAltOutlined color={'primary'} />Assign Items</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction('Forword Items')}>
          <Typography><KeyboardTabOutlined color={'primary'} />Forword Items</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction('Add Notes to Items')}>
          <Typography><AddOutlined color={'primary'} />Add Notes to Items</Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
