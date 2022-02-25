import { Routes, Route } from "react-router-dom";
import "./App.css";

import BluePill from "./components/BluePill/BluePill";
import ConectPage from "./components/ConectPage/ConectPage";
import FindCardGame from "./components/FindCardGame/FindCardGame";
import RedPill from "./components/RedPill/RedPill";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/redPill" element={<RedPill />} />
                <Route path="/bluePill" element={<BluePill />} />
                <Route path="/conect" element={<ConectPage />} />
                <Route path="/findCardGame" element={<FindCardGame />} />                
            </Routes>
        </div>
    );
}

export default App;
