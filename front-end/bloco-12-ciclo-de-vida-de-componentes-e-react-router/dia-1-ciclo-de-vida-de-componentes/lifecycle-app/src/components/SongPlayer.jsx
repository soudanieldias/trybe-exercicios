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
    return (
      <div>
        <p>
          {this.state.isPlaying ? 
            "Song is Playing" : 
            "Song is Paused"}
        </p>
        <button onClick={this.playPause}>
          Play | Pause
        </button>
      </div>
    );
  }
}

export default SongPlayer;