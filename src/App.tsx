import React from 'react';
import Header from "./components/header/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import ProductDescriptions from "./pages/product-descriptions/ProductDescriptions";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/product-descriptions" element={<ProductDescriptions/>}/>
            </Routes>
        </Router>


    );
};

export default App;