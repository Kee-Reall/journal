import React from "react";
import RegistryForm from "../components/RegistryForm/RegistryForm";

const Home = () => {

    const isLoggin: boolean = false
    return (
        <>
            {
                !isLoggin && <RegistryForm/>
            }
        </>
    )
}

export default Home