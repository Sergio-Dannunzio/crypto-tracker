import React from "react";
import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";
import { FooterComponent } from "../components/footer";

export const RouterLayout: React.FC<{}> = () =>{
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <FooterComponent tittle={"CryptoMarket.com"}></FooterComponent>
        </>
    )
}