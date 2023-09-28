// ConfirmationDialog.js

import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";


const ConfirmationDialog = ({
  open,
  onClose,
  title,
  content,
  onBacksideClick,
}) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="dialog-title" style={{overflowX:'hide'}}>
      <DialogTitle id="dialog-title">{title}</DialogTitle>
      <DialogContent style={{overflowY:'hide'}}>{content}</DialogContent>
      <DialogActions>
        {onBacksideClick && (
          <Button onClick={onBacksideClick} color="primary">
            Backside
          </Button>
        )}
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
