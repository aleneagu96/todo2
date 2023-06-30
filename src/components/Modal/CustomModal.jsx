import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Modal, Typography, Button, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function CustomModal({
  text,
  handleTextChange,
  handleSave,
  handleClose,
  open,
}) {
  const useStyles = makeStyles((theme) => ({
    modalStyle: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 500,
      height: 255,
      boxShadow: "50 !important",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      backgroundColor: "white",
    },

    closeButton: {
      alignSelf: "flex-end",
    },

    buttonStyle: {
      borderRadius: "0 !important",
      backgroundColor: "#212d40 !important",
      height: 30,
      boxShadow: 20,
      width: 90,
    },

    buttonStyleCancel: {
      borderRadius: "0 !important",
      backgroundColor: "white !important",
      color: "#212d40 !important",
      height: 30,
      width: 90,
      boxShadow: 25,
    },

    buttonsDiv: {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      marginTop: "auto",
      backgroundColor: "#f2f5f3",
      borderRadius: "0 0 20px 20px",
      paddingTop: 8,
      paddingBottom: 8,
    },

    buttonsContainer: {
      paddingRight: 30,
    },

    typoStyle: {
      alignSelf: "flex-top",
    },

    inputStyle: {
      border: "solid 1px grey !important",
      width: 300,
      borderRadius: "0 !important",
    },
  }));

  const classes = useStyles();

  const handleCloseModal = () => {
    handleClose();
  };

  return (
    <div>
      <Modal open={open} onClose={handleCloseModal}>
        <div className={classes.modalStyle}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleCloseModal}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="subtitle2" className={classes.typoStyle}>
            Edit the task? Sure:
          </Typography>
          <br />
          <br />
          <div>
            <TextField
              className={classes.inputStyle}
              label="Edit Task"
              value={text}
              onChange={(e) => handleTextChange(e.target.value)}
              autoFocus
            />
          </div>
          <div className={classes.buttonsDiv}>
            <div className={classes.buttonsContainer}>
              <Button
                className={classes.buttonStyleCancel}
                variant="contained"
                size="small"
                onClick={handleCloseModal}
              >
                Cancel
              </Button>
              <Button
                className={classes.buttonStyle}
                color="primary"
                variant="contained"
                size="small"
                onClick={handleSave}
                style={{ marginLeft: 20 }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CustomModal;
