import './App.css';
import Home from './components/Home';
import desktopBackground from "./components/images/bg-pattern-bottom-desktop.svg";


function App() {
  return (
    <div className="App">
      <Home />

      <style>{`
        .App {
          background-image: url(${desktopBackground});
          background-size: contain;
          background-position: 800px;
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
}

export default App;
