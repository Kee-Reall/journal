import React from "react";
import RegistryForm from "../components/RegistryForm/RegistryForm";
import './Home.scss'

const Home = () => {

    const isLogin: boolean = false
    return (
        <>
            <div>
            { !isLogin && <RegistryForm/> }
            </div>
            <div>

            </div>
        </>
    )
}

export default Home