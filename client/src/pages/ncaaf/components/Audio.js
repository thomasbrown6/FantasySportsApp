import React from "react";
import './styles.css';
import Song from "./Song";
import Play from "./Play";
import Pause from "./Pause";
import Bar from "./Bar";
import readimg from '../img/read.png';
import heart from '../img/heart.png';
import Volume from '../img/Volume.png';
import download from '../img/download.png';
import useAudioPlayer from './useAudioPlayer';

function Audio(props) {
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();

  return (
<>
    <div className="player" style={props.style}>
      <audio id="audio">
        <source src="./song.mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className="readimg">
       <img src={readimg} alt="podcasts-audio-img" className="readimgsize" />
       
      </div>
      <Song songName="F Your Purse" songArtist="The Read" />
      <div className="controls">
        {playing ? 
          <Pause handleClick={() => setPlaying(false)} /> :
          <Play handleClick={() => setPlaying(true)} />
        }
        <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/>
        <div className="readimg">
       
      </div>
      <img src={download} alt="podcasts-download-img" className="download" />
       <img src={heart} alt="podcasts-heart-img" className="heart" />
       <img src={Volume} alt="podcasts-volume-img" className="volume" />
      </div>
    </div>
    
    </>
  );
}

export default Audio;
