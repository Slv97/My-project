import { Routes, Route, Link, Navigate } from "react-router-dom";

import "./App.css";

import FirstMessage from "./components/FirstMessage/FirstMessage";
import ScreensaverMatrix from "./components/ScreensaverMatrix/ScreensaverMatrix";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/one" element={<FirstMessage />} />
                <Route path="/two" element={<ScreensaverMatrix />} />
            </Routes>
        </div>
    );
}

export default App;
