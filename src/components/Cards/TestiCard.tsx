import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import useStyles from './testi-card-style';
import useClasses from '../../customClasses';


function TestiCard(props: any) {
    const classes = useClasses(useStyles);
    const { text, name, avatar } = props;
    return (
        <Paper className={classes.card}>
            <Typography variant="body1" display="block">
                {text}
            </Typography>
            <div className={classes.name}>
                <Avatar alt={name} src={avatar} className={classes.avatar} />
                <Typography variant="caption">
                    {name}
                </Typography>
            </div>
        </Paper>
    );
}

TestiCard.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
};

export default TestiCard;
