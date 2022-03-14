import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";

//public pages
import Homepage from "./components/Homepage";
import Layout from "./components/Layout";
import Braseiro351 from "./components/Portfolio/Braseiro351";

export const history = createBrowserHistory();

const Router = () => {
    return (
        <BrowserRouter history={history}>

            <Routes>
                <Route exact path="/project/braseiro351" element={<Layout><Braseiro351 /></Layout>} />
                <Route exact path="/" element={<Layout><Homepage /></Layout>} />
            </Routes>


        </BrowserRouter >
    );
};

export default Router;
