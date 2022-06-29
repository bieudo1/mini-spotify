import useMusicPlayer from "./hooks/useMusicPlayer"
const TrackList = () => {
    const { trackList, currentTrackName, playTrack } =useMusicPlayer();
  
    return (
      <>
        <div className = "name">{currentTrackName}</div>
        {trackList.map((track, index) => (
            <div key = {index}>
              <button onClick = {() => playTrack(index)}  className="song-title">
                {track.name}
              </button>
            </div>
        ))}
      </>
    );
  };
  
  export default TrackList;