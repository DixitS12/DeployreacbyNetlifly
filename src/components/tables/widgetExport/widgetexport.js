import React, { useState, useEffect } from "react";
import {
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import { CloudDownload } from '@material-ui/icons';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export default function WidgetColumnHide({
  columns,
  onExport,
  ...props
}) {

  // local
  var [moreButtonRef, setMoreButtonRef] = useState(null);
  var [isMoreMenuOpen, setMoreMenuOpen] = useState(false);

  useEffect(() => {
  }, [columns])


  const handlePdfClick = () => {
    const doc = new jsPDF()
    autoTable(doc, { html: '#table-resize' })
    doc.save('table.pdf')
  }
  const handleClick = () => {
    onExport();
  };
  return (


    <React.Fragment>

      <Tooltip title="Hide/Show">
        <IconButton aria-label="Hide/Show"
          onClick={() => setMoreMenuOpen(true)}
          buttonRef={setMoreButtonRef}
        >
          <CloudDownload />
        </IconButton>
      </Tooltip>

      <Menu
        id="widget-menu"
        open={isMoreMenuOpen}
        anchorEl={moreButtonRef}
        onClose={() => setMoreMenuOpen(false)}
        disableAutoFocusItem
      >

        <MenuItem onClick={handleClick}>
          <Typography>   Export to csv</Typography>
        </MenuItem>
        <MenuItem onClick={handlePdfClick}>
          <Typography>   Export to pdf</Typography>
        </MenuItem>

      </Menu>

    </React.Fragment>
  );
}
