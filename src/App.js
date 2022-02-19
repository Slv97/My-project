import { Routes, Route, Link, Navigate } from "react-router-dom";

import "./App.css";

import FirstMessage from "./components/FirstMessage/FirstMessage";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/one" element={<FirstMessage />} />
            </Routes>
        </div>
    );
}

export default App;
