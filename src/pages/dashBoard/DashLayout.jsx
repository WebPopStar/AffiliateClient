import React from "react";
import Header from "../../components/dashBoard/header/Index";
import Footer from "../../components/dashBoard/footer";
import { Outlet } from "react-router";

const DashLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default DashLayout;