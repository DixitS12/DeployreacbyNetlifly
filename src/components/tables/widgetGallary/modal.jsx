import React, { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import GallaryImages from "./gallaryImages";

export default function GallaryModal(props) {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");

  const handleClose = (e) => {
    e.stopPropagation();
    props.handleClose(e, false);
    setOpen(false);
  };
  useEffect(() => {
    if (props.open) {
      setOpen(props.open);
    }
  }, [props.open]);

  return (
    <Dialog
      id="gallary-container"
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={open}
      keepMounted
      onClose={(e) => handleClose(e)}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <GallaryImages />
      </DialogContent>
    </Dialog>
  );
}
