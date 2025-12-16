import React from "react";
import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

const MainLayout = () => {
    return (
        <>
            <Header />
            <section className="mx-auto my-10 max-w-7xl">
                <Outlet />
            </section>
            <Footer />
        </>
    );
};

export default MainLayout;
