import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Loading from "./components/Loading/Loading";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import RedPill from "./components/RedPill/RedPill";
import BluePill from "./components/BluePill/BluePill";

const ConectPage = React.lazy(() => import("./components/ConectPage/ConectPage"));
const FindCardGame = React.lazy(() => import("./components/FindCardGame/FindCardGame"));
const NewConection = React.lazy(() => import("./components/NewConection/NewConection"));

function App() {
    // попробовать добавить webp - сжатые картинки для современных браузеров, пример:
    //https://www.joshwcomeau.com/performance/embracing-modern-image-formats/
    // transform translate -50%
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/redPill" element={<RedPill />} />
                <Route path="/bluePill" element={<BluePill />} />
            </Routes>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/conect" element={<ConectPage />} />
                    <Route path="/findCardGame" element={<FindCardGame />} />
                    <Route path="/newConection" element={<NewConection />} />                    
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
