import { Routes, Route } from "react-router-dom";

import "./App.css";

import ConectPage from "./components/ConectPage/ConectPage";
import FirstMessage from "./components/FirstMessage/FirstMessage";
import MemoryGame from "./components/MemoryGame/MemoryGame";
import ScreensaverMatrix from "./components/ScreensaverMatrix/ScreensaverMatrix";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/one" element={<FirstMessage />} />
                <Route path="/two" element={<ScreensaverMatrix />} />
                <Route path="/conect" element={<ConectPage />} />
                <Route path="/memoryGame" element={<MemoryGame />} />
                
            </Routes>
        </div>
    );
}

export default App;
