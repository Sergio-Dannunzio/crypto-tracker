import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage} from "./pages";
import { RouterLayout } from "./common/RouterLayout";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import { CoinPage } from "./pages/coin/coinPage";
import { CoinList } from "./pages/coinList";

export const AppRouter: React.FC<{}> = () =>{
    return (
        <Routes>
            <Route path="/crypto-tracker.github.io/" element={<RouterLayout />}>
                <Route path="/crypto-tracker.github.io/" element={<HomePage />} />
                <Route path="/crypto-tracker.github.io/login" element={<LoginPage />} />
                <Route path="/crypto-tracker.github.io/register" element={<RegisterPage />} />
                <Route path="/crypto-tracker.github.io/coin/:id" element={< CoinPage/>} />
                <Route path="/crypto-tracker.github.io/coins" element={< CoinList/>} />
            </Route>
            
        </Routes>
    )
}