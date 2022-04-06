import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Slide from '@mui/material/Slide';
import useStyles from './notification-style';
import { useTranslation } from 'react-i18next';
import useClasses from '../../customClasses';


function TransitionUp(props: any) {
  return <Slide {...props} direction="up" />;
}

function Notification(props: any) {
  const { t, i18n } = useTranslation();
  const classes = useClasses(useStyles);
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Snackbar
      TransitionComponent={TransitionUp}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      classes={{
        root: classes.notification,
      }}
      open={open}
      onClose={handleClose}
    >
      <SnackbarContent
        message={<Typography id="message-id">{t('common:notif_msg')}</Typography>}
        classes={{
          action: classes.action
        }}
        action={(
          <Button key="undo" variant="contained" className={classes.button} onClick={handleClose}>
            {t('common:accept')}
          </Button>
        )}
      />
    </Snackbar>
  );
}

Notification.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Notification;
