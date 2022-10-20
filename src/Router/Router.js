import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import HomeComponent from "../components/HomeComponent";
import ListComponent from "../components/ListComponent";
import WordInfoComponent from "../components/WordInfoComponent";

const Router = () =>{
    return (<BrowserRouter>
    <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/definition/:word" element={<WordInfoComponent/>}/>
        <Route path="/error/:word" element={<ErrorPage/>}/>
        <Route path="/List" element={<ListComponent/>}/>
        <Route path="*" element={<Navigate to='/'/>}/>
    </Routes>
    </BrowserRouter>);

}

export default Router