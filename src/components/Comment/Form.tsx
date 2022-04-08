import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Send from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import avatarDefault from '../../public/images/avatars/pp_boy4.svg';
import useStyles from './comment-style';
import useClasses from '../../customClasses';


function Form(props: any) {
  const classes = useClasses(useStyles);

  const [comment, setComment] = useState('');

   // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  // Translation Function
  const { t, avatar } = props;

  const handleChange = (event : any) => {
    setComment(event.target.value);
  };

  return (
    <section className={classes.commentAction}>
      <div className={classes.commentForm}>
        <Avatar alt="avatar" src={avatar !== '' ? avatar : avatarDefault} className={classes.avatarMini} />
        <TextField
          placeholder="Write Comment"
          size="small"
          variant="outlined"
          onChange={handleChange}
          value={comment}
          className={classes.input}
          inputProps={{
            'aria-label': 'Comment',
          }}
        />
        <Button variant="contained" size="small" color="primary" aria-label="send" className={classes.sendButton}>
          {isMobile ? (<Send />) : t('common:form_send')}
        </Button>
      </div>
    </section>
  );
}

Form.propTypes = {
  t: PropTypes.func.isRequired,
  avatar: PropTypes.string
};

Form.defaultProps = {
  avatar: ''
};

export default Form;
