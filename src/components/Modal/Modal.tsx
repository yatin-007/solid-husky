import { Box, Modal, Typography, useTheme } from '@suid/material';
import { JSXElement } from 'solid-js';
import CloseIcon from '@suid/icons-material/Close';

import Button from '../Button';
const theme = useTheme();

type ModalProps = {
  open: boolean;
  title: string;
  handleClose?: () => void;
  onSubmit?: (event: Event) => Promise<void>;
  children: JSXElement;
};

export default function WrapperModal({
  open,
  title,
  handleClose,
  onSubmit,
  children,
}: ModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: theme.palette.background.paper,
          boxShadow: '24px',
          p: 2,
          borderRadius: 2,
        }}
      >
        {title && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <Typography
              variant="caption"
              onClick={handleClose}
              sx={{ mt: 0.5, cursor: 'pointer' }}
            >
              <CloseIcon />
            </Typography>
          </Box>
        )}

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {children}
        </Typography>
        <Box
          sx={{
            justifyContent: 'flex-end',
            display: 'flex',
            mt: 2,
            '& button': {
              m: 1,
              borderRadius: 5,
              p: '5px 30px',
            },
          }}
        >
          <Button variant="outlined" label="CLOSE" onClick={handleClose} />
          <Button variant="contained" label="SUBMIT" onClick={onSubmit} />
        </Box>
      </Box>
    </Modal>
  );
}
