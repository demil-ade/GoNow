import React from "react";
import Homepage from "../pages/HomePage";
import Business from "../pages/Business";
import NoPage from "../pages/NoPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element ={<Homepage/>} />
                <Route path ="business" element ={<Business/>} />
                <Route path="*" element ={<NoPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;