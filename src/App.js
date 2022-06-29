import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./TrackList"
import Controller from "./Controller"

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList />
        <Controller />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;