import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";

//public pages
import Homepage from "./components/Homepage";
import Layout from "./components/Layout";
import Braseiro351 from "./components/Portfolio/Braseiro351";
import Team from "./components/Team";
import ScrollToTop from "./components/Common/ScrollToTop";
import Michael from "./components/Team/Michael";

export const history = createBrowserHistory();

const Router = () => {
    return (
        <BrowserRouter history={history}>
            <ScrollToTop>
                <Routes>
                    <Route exact path="/team/carolina" element={<Layout><Team /></Layout>} />
                    <Route exact path="/team/michael" element={<Layout><Michael /></Layout>} />
                    <Route exact path="/team" element={<Layout><Team /></Layout>} />
                    <Route exact path="/project/braseiro351" element={<Layout><Braseiro351 /></Layout>} />
                    <Route exact path="/" element={<Layout><Homepage /></Layout>} />
                </Routes>
            </ScrollToTop>

        </BrowserRouter >
    );
};

export default Router;
