import "./App.css";
import Desktop1 from "./desktop1/desktop1.js";
import Desktop2 from "./desktop2/desktop2.js";
import Desktop3 from "./desktop3/Desk3.js";
import Desktop4 from "./desktop4/desktop4.js";
import AboutUs from "./desktop5/aboutus.js";
import Navbar from "./navbar/navbar.js";
import Footer from "./footer/footer";
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
