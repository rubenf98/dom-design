import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";

//public pages
import Homepage from "./components/Homepage";
import Layout from "./components/Layout";
import Team from "./components/Team";
import ScrollToTop from "./components/Common/ScrollToTop";
import Michael from "./components/Team/Michael";
import Carolina from "./components/Team/Carolina";

import Braseiro351 from "./components/Portfolio/GoldenGrill";
import CalhauHotel from "./components/Portfolio/CalhauHotel";
import Calamar from "./components/Portfolio/Calamar";
import Elleven from "./components/Portfolio/Elleven";
import RestauranteFunchal from "./components/Portfolio/RestauranteFunchal";
import CasaCanhas from "./components/Portfolio/CasaCanhas";
import PadariaPM from "./components/Portfolio/PadariaPM";

export const history = createBrowserHistory();


const Router = () => {
    return (
        <BrowserRouter history={history}>
            <ScrollToTop>
                <Routes>
                    <Route exact path="/team/carolina" element={<Layout><Carolina /></Layout>} />
                    <Route exact path="/team/michael" element={<Layout><Michael /></Layout>} />
                    <Route exact path="/team" element={<Layout><Team /></Layout>} />
                    <Route exact path="/project/goldengrill" element={<Layout><Braseiro351 /></Layout>} />
                    <Route exact path="/project/hotelcalhau" element={<Layout><CalhauHotel /></Layout>} />
                    <Route exact path="/project/calamar" element={<Layout><Calamar /></Layout>} />
                    <Route exact path="/project/elleven" element={<Layout><Elleven /></Layout>} />
                    <Route exact path="/project/restaurantefranciso" element={<Layout><RestauranteFunchal /></Layout>} />
                    <Route exact path="/project/casacanhas" element={<Layout><CasaCanhas /></Layout>} />
                    <Route exact path="/project/padariapm" element={<Layout><PadariaPM /></Layout>} />
                    <Route exact path="/" element={<Layout><Homepage /></Layout>} />
                </Routes>
            </ScrollToTop>

        </BrowserRouter >
    );
};

export default Router;
