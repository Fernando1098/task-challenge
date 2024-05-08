import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import { SubjectManager } from "../../models/subject-manager.model.ts";
import { Subscription } from "rxjs";
import { Close } from "@mui/icons-material";

interface Props {
  children: React.ReactNode;
  size: DialogProps["maxWidth"];
  title: string;
}

export const dialogOpenSubject$ = new SubjectManager<boolean>();
export const dialogCloseSubject$ = new SubjectManager<boolean>();

const CustomDialog = ({ children, size = "md", title }: Props) => {
  const [openDialog, setOpenDialog] = useState(false);
  let openSubject$ = new Subscription();
  let closeSubject$ = new Subscription();

  useEffect(() => {
    openSubject$ = dialogOpenSubject$.getSubject.subscribe(() =>
      handleClickOpen(),
    );
    closeSubject$ = dialogCloseSubject$.getSubject.subscribe(() =>
      handleClose(),
    );
    return () => {
      openSubject$.unsubscribe();
      closeSubject$.unsubscribe();
    };
  }, []);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleExit = () => {
    dialogCloseSubject$.setSubject = false;
  };

  return (
    <div>
      {" "}
      <Dialog
        open={openDialog}
        maxWidth={size}
        onClose={handleExit}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#fff",
            backgroundColor: "primary.main",
          }}
        >
          <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
            {title}
          </Typography>
          <Close sx={{ cursor: "pointer" }} onClick={handleExit} />
        </DialogTitle>
        <Divider />
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomDialog;
