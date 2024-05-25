import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { cryptos } from "../../api/cryptos";
import React from "react";
import { Grid, makeStyles } from "@mui/material";
import { CardComponent } from "../../components";
import { TypeCrypto } from "./interface/crypto.interface";

export const CoinPage: React.FC<{}> = () => {
    const { id } = useParams();
    const [ coin, setCoin] = React.useState<TypeCrypto[] | null>(null)


    React.useEffect(()=>{
        cryptos.getById({id}).then((r)=>{
        setCoin(r.data)
        console.log(r.data)
        }).catch((e)=>{
          console.error(e)
        })
    },[])

      
    return(
        <div>
        {
          coin !== null ? (
            <Grid container>
              {coin!.map((crypto) => (
                <Grid item md={8}>
                    <CardComponent id={crypto.id} image={crypto.image} name={crypto.name} symbol={crypto.symbol} price={crypto.current_price} pricePercent={crypto.price_change_percentage_24h} marketCap={crypto.market_cap}/>
                </Grid>
              ))}
            </Grid>
          ) : ""
        }
        </div>
  );
};
    