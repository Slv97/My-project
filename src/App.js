import './App.css';
import NeonText from './components/NeonText/NeonText';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Welcome text='Andy' /> */}
      <NeonText text="welcome" />
    </div>
  );
}

export default App;
