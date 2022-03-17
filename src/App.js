import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";
import Loading from "./components/Loading/Loading";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import RedPill from "./components/RedPill/RedPill";
import BluePill from "./components/BluePill/BluePill";

const ConectPage = React.lazy(() =>
    import("./components/ConectPage/ConectPage")
);
const FindCardGame = React.lazy(() =>
    import("./components/FindCardGame/FindCardGame")
);
const NewConection = React.lazy(() =>
    import("./components/NewConection/NewConection")
);

function App() {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<WelcomePage />} />
                    <Route path="redPill" element={<RedPill />} />
                    <Route path="bluePill" element={<BluePill />} />

                    <Route
                        path="conect"
                        element={
                            <Suspense fallback={<Loading />}>
                                <ConectPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="findCardGame"
                        element={
                            <Suspense fallback={<Loading />}>
                                <FindCardGame />
                            </Suspense>
                        }
                    />
                    <Route
                        path="newConection"
                        element={
                            <Suspense fallback={<Loading />}>
                                <NewConection />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
