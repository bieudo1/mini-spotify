import React from 'react'
import useMusicPlayer from "./hooks/useMusicPlayer"

function Controller() {
    const { togglePlay, currentTrackIndex, playPreviousTrack, playNextTrack} = useMusicPlayer();
  return (
    <div>
      <button  onClick = {() => playPreviousTrack()}>playPreviousTrack</button>
      <button onClick = {() => togglePlay(currentTrackIndex)} >togglePlay</button>
      <button onClick = {() => playNextTrack()}>playNextTrack</button>

    </div>
  )
}

export default Controller
