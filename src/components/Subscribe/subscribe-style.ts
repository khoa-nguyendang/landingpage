

const subscribeStyles = (theme: any ) => ({
  subscribeWrap: {
    maxWidth: 600,
    margin: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      margin: '0 auto 32px',
    },
    zIndex: 10,
    position: 'relative'
  },
  paper: {
    padding: theme.spacing(4)
  },
  textField: {
    marginTop: theme.spacing(3)
  },
  rightIcon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit'
  }
});

export default subscribeStyles;
