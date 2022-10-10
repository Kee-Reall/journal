import React from "react";
import {Link, Outlet} from "react-router-dom";
import "./Layout.scss"

const Layout = () => {
    return (
        <>
            <header>
                <div className="navigation">
                    <nav>
                        <ul>
                            <li><Link to="/"><span>Home</span></Link></li>
                            <li><Link to={"/profile"}><span>Profile</span></Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="decoration">
                    <h1>Chatty</h1>
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