import React from "react";
import {Link, NavLink, Outlet} from "react-router-dom";
import "./Layout.scss"

const Layout = () => {
    return (
        <>
            <header>
                <div className="navigation">
                    <nav>
                        <ul>
                            <li><NavLink to={"/profile"}><span>Profile</span></NavLink></li>
                            <li><NavLink to={"/poststore"}><span>Posts</span></NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="decoration">
                    <NavLink to={"/"}><h1>Chatty</h1></NavLink>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <span>Powered by React + Node.JS. Developer: Kirill Bezrodnyi</span>
            </footer>
        </>
    )
}

export default Layout