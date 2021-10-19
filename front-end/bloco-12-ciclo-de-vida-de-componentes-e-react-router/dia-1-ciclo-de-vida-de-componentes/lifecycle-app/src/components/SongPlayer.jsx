import React, { Component } from "react";

// Import your audio file
import song from './static/01.mp3';

class SongPlayer extends Component {

  state = {
    audio: new Audio(song),
    isPlaying: false,
  };

  playPause = () => {
    let isPlaying = this.state.isPlaying;
    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    const { isPlaying } = this.state;
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
      </div>
    );
  }
}

export default SongPlayer;