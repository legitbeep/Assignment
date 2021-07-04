import React from 'react';
import Grid from '@material-ui/core/Grid';

// components
import Comment from './components/Comment';
import Input from './components/Input';

// styles
import './App.css';

function App() {

  const [comments,setComments] = React.useState([
    { name : "Patrick" , profilePic : "https://i.pinimg.com/originals/ba/54/14/ba54145bc0b18e907479f286719adc0c.jpg" , text : "Hello there its been an honor being a part of this . See ya guys later ! " , gif : null},
    { name : "Pewdiepie" , profilePic : "https://i.redd.it/ulktc86dmezz.png" , text : "How its going bros! Here's a Brofist!" , gif : "https://media1.giphy.com/media/kgIAvxOIpNyAU/giphy.gif"},
    { name : "KSI" , profilePic : "https://lastfm.freetls.fastly.net/i/u/770x0/f31280f1afbeb58e98682c44414bd18c.jpg" , text : "Stream my song Holiday on spotify and I'll see you guys in a bit!" , gif : "https://thumbs.gfycat.com/LikelyInsidiousDungbeetle-max-1mb.gif"},
  ]);

  const handleComment = (info) => {
    setComments([info,...comments])
  }

  return (
    <div className="App">
      <div className="mainApp">
        <Grid container justify="center">
          <Grid item container xs={12} justify="center">
              <Input handleComment={handleComment} />
          </Grid>
          <Grid item container xs={12} direction="column" alignItems="center">
            {
              comments.map((c) => <Comment info={c} />)
            }
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
