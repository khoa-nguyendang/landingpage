

const testiStyles = (theme: any ) => ({
  card: {
    padding: theme.spacing(3)
  },
  name: {
    display: 'flex',
    marginTop: theme.spacing(),
    alignItems: 'center',
    '& span': {
      display: 'inline-block',
      marginLeft: theme.spacing()
    }
  },
  avatar: {
    width: 30,
    height: 30
  }
});

export default testiStyles;
