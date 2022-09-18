import * as React from 'react';
import Dialog from '@mui/material/Dialog';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p onClick={handleClickOpen}>
        Open alert dialog
      </p>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        내용
      </Dialog>
    </div>
  );
}
