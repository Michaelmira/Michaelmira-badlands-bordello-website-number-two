import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { CampQuestionnaire } from "./pages/CampQuestionnaire";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { UserDashboard } from "./pages/UserDashboard";
import { Donate } from "./pages/Donate";
import { Gallery } from "./component/Gallery";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div style={{ height: "100%" }} >
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/log-in" />
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<CampQuestionnaire />} path="/camp-questionnaire" />
                        <Route element={<UserDashboard />} path="/user-dashboard" />
                        <Route element={<Donate />} path="/donate" />
                        <Route element={<Gallery />} path="/gallery" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
