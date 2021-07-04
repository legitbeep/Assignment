import React from 'react'
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from "@material-ui/core/IconButton";
import GifIcon from '@material-ui/icons/Gif';
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';
import ReactGiphySearchbox from 'react-giphy-searchbox'
import Menu from '@material-ui/core/Menu'
// styles
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    avatar : {
        height: "65px",
        width : "65px",
        borderRadius : "50%",
        objectFit: "cover"
    },
    btn : {
        marginRight : "100px",
        backgroundImage: "linear-gradient(to right, #0f93eb, #810ae2)",
        color: "white",
        fontWeight : "600",
        fontSize: "14px",
        [theme.breakpoints.down('sm')] : {
            marginRight : 0
        }
    },
    cancelBtn : {
        marginRight : "20px",
        backgroundImage: "linear-gradient(to right, #fbc100, #eb210f)",
        color: "white",
        fontWeight : "600",
        fontSize: "14px",
    },
    input : {
        width : "100%",
    },
    inputGrid:{
        padding : "20px 0px 20px 20px",
        [theme.breakpoints.down('sm')] : {
            padding: 0,
        }
    },
    gif: {
        maxHeight: "150px",
        width : "100px",
        marginTop: "50px"
    },
    actionsGrid : {
        marginTop : "20px",
    },
    paper: {
        boxShadow : '4px 4px 8px #4d4c4d',
        padding : "20px",
        border : "1px solid #4d4c4d"
    }
}))

const GifMenu = ({ handleGif, menuAnchor, handleMenu }) => {   
    const classes = useStyles();

    return (
        <Menu 
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleMenu}
            keepMounted
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
            }}
            transformOrigin={{
            vertical: "top",
            horizontal: "center"
            }}
            classes={{
                paper: classes.paper
            }}
        >
                <ReactGiphySearchbox
                  apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
                  onSelect={(item) =>handleGif(item)}
               
                  masonryConfig={[
                    { columns: 2, imageWidth: 110, gutter: 5 },
                    { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 }
                  ]}
                />
        </Menu>
    )
}

const InputComment = ({ handleComment }) => {

    const classes = useStyles();

    const name = "Beep";
    const profilePic = "https://avatars.githubusercontent.com/u/50167891?v=4";

    const [text,setText] = React.useState("");
    const [gif,setGif] =  React.useState(null);
    const [gifOpen, setGifOpen] = React.useState(false);

    const [menuAnchor, setMenuAnchor] = React.useState(null);

    const handleText = (e) => {
        setText(e.target.value);
    }

    const handleGifClick = (e) => {
        setGifOpen(!gifOpen);
        if (gifOpen) {
            setMenuAnchor(e.currentTarget);
        } else{
            setMenuAnchor(null);
        }
    }
    
    const handleCancel = () => {
        setGif(null);
        setText("");
    }
    const handleGif = (val) =>{
        console.log(val)
        setGif(null);
        setGif(val.images.downsized.url);
    }

    const handleSubmit = () => {
        handleComment({ name , profilePic , text, gif });
        handleCancel();
    }

    return (
        <Grid item container xs={12} justify="center" className={classes.inputGrid}>
            <Grid item container xs={3} md={1} alignItems="flex-start" justify="center" direction="column">
                <img src={profilePic} className={classes.avatar} alt="profile" />
            </Grid>
            <Grid item container xs={8} md={10} justify="center" >


                <FormControl className={classes.input}>
                    <InputLabel htmlFor="comment-text">Comment</InputLabel>
                    {
                        gif ? 
                        <img src={gif} className={classes.gif} alt="gif" />
                        :
                        null
                    }
                    <Input
                        id="comment-text"
                        type='text'
                        value={text}
                        onChange={handleText}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleGifClick} 
                            >
                            <GifIcon />
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                    </FormControl>
                <GifMenu handleGif={handleGif} handleMenu={handleGifClick} menuAnchor={menuAnchor} />
            </Grid>
            <Grid item container xs={12} justify="flex-end" alignItems="center" className={classes.actionsGrid}>
                <Button disabled={ text == "" && gif == null } onClick={handleCancel} className={classes.cancelBtn}>Cancel</Button>
                <Button disabled={ text == "" && gif == null } onClick={handleSubmit} className={classes.btn}>COMMENT</Button>
            </Grid>
        </Grid>
    )
}

export default InputComment
