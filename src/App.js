import { Routes, Route } from "react-router-dom";

import "./App.css";

import ConectPage from "./components/ConectPage/ConectPage";
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
                <Route path="/conect" element={<ConectPage />} />
            </Routes>
        </div>
    );
}

export default App;
