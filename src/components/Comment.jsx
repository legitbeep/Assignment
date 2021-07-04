import React from 'react'
import Grid from "@material-ui/core/Grid"

// styles
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    avatar : {
        height: "45px",
        width : "45px",
        borderRadius : "50%",
        objectFit: "cover"
    },
    gif: {
        height: "150px",
        padding : "10px 0px",
        objectFit : 'cover',
        [theme.breakpoints.down('sm')] : {
            height: "70px"
        }
    },
    textGrid : {
        backgroundImage : "linear-gradient(to right, #3fbfff, #810ae2)",
        padding : "10px 20px",
        borderRadius :"10px",
    },
    rootGrid: {
        margin : "20px 0px"
    },
    userText : {
        fontSize : "14px",
        fontWeight : "800",
        letterSpacing : '1px',
        color : "#51058f"
    },
    text: {
        fontSize: "16px",
        color : "black",
    }
}))

const Comment = ({ info }) => {

    const classes = useStyles();
    const username = info.name;
    const profile = info.profilePic;
    const comment = info.text;
    const gif = info.gif;

    return (
        <Grid item container xs={11}  justify="center" className={classes.rootGrid}>
            <Grid item container xs={2} md={1} justify="center" alignItems="flex-start" >
                <img src={profile} alt="profile" className={classes.avatar} />
            </Grid>
            <Grid item container xs={10} md={11} justify="center" alignItems="flex-start" className={classes.textGrid}>
                <Grid item container xs={12} justify="flex-start" alignItems="center">
                    <span className={classes.userText}>{username}</span>
                </Grid>
                {
                    gif ? 
                    <Grid item container xs={12} alignItems="center">
                        <img src={gif} alt="gif" className={classes.gif} />
                    </Grid>
                    :
                    null
                }
                {
                    comment ?
                    <Grid item container xs={12} alignItems="center">
                        <span className={classes.text}>
                            {comment}
                        </span>
                    </Grid>
                    :
                    null
                }
            </Grid>
        </Grid>
    )
}

export default Comment
