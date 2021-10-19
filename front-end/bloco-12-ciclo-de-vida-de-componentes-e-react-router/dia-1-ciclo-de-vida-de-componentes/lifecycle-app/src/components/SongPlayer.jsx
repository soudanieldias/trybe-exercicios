import React, { Component } from "react";

// Import your audio file
import song from './static/rmAudio.mp3';

class SongPlayer extends Component {

  state = {
    audio: new Audio(song),
    isPlaying: false,
    isStoped: true
  };

  playPause = () => {
    let isPlaying = this.state.isPlaying;
    let isStoped = this.state.isStoped;
    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }
    this.setState({
      isPlaying: !isPlaying,
      isStoped: !isStoped,
    });
  };
  
  stopFunc = () => {
    this.state.audio.pause();
    this.state.audio.currentTime = 0;

    this.setState({ isPlaying: false });
  }

  render() {
    const { isPlaying, isStoped } = this.state;
    const textSong = song.slice(14,30);
    return (
      <div>
        <p>
          {isPlaying ? 
            `Song ${textSong} is Playing` : 
            `Song ${textSong} is Paused`}
        </p>
        <button onClick={this.playPause}>
            {isPlaying ? 
            "Pause" : 
            "Play"}
        </button>
        <button disabled={ isStoped } onClick={ (audio) => { this.stopFunc() } }>
          Stop
        </button>
      </div>
    );
  }
}

export default SongPlayer;