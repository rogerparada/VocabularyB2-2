import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutComponent from "../components/AboutComponent";
import ErrorPage from "../components/ErrorPage";
import HomeComponent from "../components/HomeComponent";
import ListComponent from "../components/ListComponent";
import SearchComponent from "../components/SearchComponent";
import WordInfoComponent from "../components/WordInfoComponent";

const Router = () =>{
    return (<BrowserRouter>
    <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/definition/:word" element={<WordInfoComponent/>}/>
        <Route path="/error/:word" element={<ErrorPage/>}/>
        <Route path="/List" element={<ListComponent/>}/>
        <Route path="/Search" element={<SearchComponent/>}/>
        <Route path="/About" element={<AboutComponent/>}/>
        <Route path="*" element={<Navigate to='/'/>}/>
    </Routes>
    </BrowserRouter>);
}

export default Router