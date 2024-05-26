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
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/coin/:id" element={< CoinPage/>} />
                <Route path="/coins" element={< CoinList/>} />
            </Route>
            
        </Routes>
    )
}