import React from "react";
import {browserRouter,Routes,Route, BrowserRouter} from "react-router-dom"
import Main from './pages/main/main.js'

function Router(){
    return (<BrowserRouter>
    <Routes>
        <Route path='/' element={<Main/>}/>
        </Routes></BrowserRouter>)
}

export default Router;