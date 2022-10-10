import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import PostStore from './pages/PostStore';

function App() {
  return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'poststore'} element={<PostStore/>} />
                <Route path={'*'} element={<ErrorPage/>}/>
            </Route>
        </Routes>
  );
}

export default App;
