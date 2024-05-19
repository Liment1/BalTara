import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="container mw-100">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route
                            index
                            element={
                                <div>
                                    <Desktop1 />
                                    <Desktop2 />
                                    <Footer />
                                </div>
                            }
                        />
                        <Route
                            path="foods/:id"
                            element={
                                <div className="Desk3">
                                    <Desktop3 />
                                </div>
                            }
                        />
                        <Route path="abtus" element={<AboutUs />} />
                        <Route
                            path="support"
                            element={
                                <div>
                                    <Desktop4 />
                                </div>
                            }
                        />
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
