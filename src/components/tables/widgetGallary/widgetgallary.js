import React, { useState, useEffect, useContext } from "react";
import {
  IconButton,
  Badge,
  Avatar,
} from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import GallaryModal from './modal';
import { imagesContext } from '../commonContext/context';

function WidgetGallary() {

  // local
  var [moreButtonRef, setMoreButtonRef] = useState(null);
  const [open, setOpen] = React.useState(false);

  var images = useContext(imagesContext);


  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };
  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };
  return (
    <React.Fragment>

      <GallaryModal
        open={open}
        handleClose={(e) => handleClose(e)}
      >
      </GallaryModal>



      <Tooltip title="Gallary">
        <IconButton aria-label="Gallary"

          buttonRef={setMoreButtonRef}
        >
          <Badge color="primary" badgeContent={images.length} onClick={(e) => handleOpen(e)}>
            <Avatar alt={images[0].title} variant="round" src={images[0].url} />
          </Badge>
        </IconButton>
      </Tooltip>



    </React.Fragment>

  );
}
export default WidgetGallary
