import React, { useState } from 'react';
import Box from '@mui/material/Box';
import YouTube, { Options } from 'react-youtube';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Zoom from '@mui/material/Zoom';
import MediaCard from '../Cards/MediaCard';
import useStyles from './about-style';
import useClasses from '../../customClasses';
import { useText } from '../../theme/common';
import CloseIcon from '@mui/icons-material/Close';

const tran: any = React.forwardRef(function Transition(props: any, ref) {
    // eslint-disable-line
    return <Zoom ref={ref} {...props}/>;
});

function Video() {
    const classes = useClasses(useStyles);
    const text = useClasses(useText);
    const [player, setPlayer] = useState<any>([]);
    const [openPopup, setOpenPopup] = useState(false);

    const handleClickOpen = () => {
        setOpenPopup(true);
        (player[0])!.playVideo();
    };

    const handleClose = () => {
        setOpenPopup(false);
        (player[0])!.pauseVideo();
    };

    const _onReady = (event: any) => {
        player.push(event.target);
        setPlayer(player);
    };

    const opts: Options = {
        height: '360',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            controls: 1,
            rel: 0,
            showinfo: 1,
            mute: 0,
            origin: 'https://localhost:3008'
        }
    };

    return (
        <div className={classes.mainFeature}>
            <Dialog
                open={openPopup}
                TransitionComponent={tran}
                keepMounted
                classes={{ paper: classes.videoPopup }}
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    Vestibulum consequat hendrerit lacus
                    <IconButton onClick={handleClose} className={classes.closeBtn}>
                        <CloseIcon className={classes.icon} />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <YouTube
                        videoId="sf15CtXuw9M"
                        onReady={_onReady}
                        opts={opts}
                    />
                </DialogContent>
            </Dialog>
            <Box mb={2}>
                <h4 className={text.title2}>
                    Lorem ipsum dolor sit amet.
                </h4>
            </Box>
            <p className={text.subtitle2}>
                Proin scelerisque sapien at enim faucibus, ut scelerisque urna consequat. In porttitor congue libero
            </p>
            <MediaCard
                title="Sed lacinia velit, ut malesuada eros interdum a"
                orientation="landscape"
                type="video"
                thumb="https://source.unsplash.com/random"
                action={() => handleClickOpen()}
            />
        </div>
    );
}

export default Video;
