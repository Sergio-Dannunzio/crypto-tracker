import React from "react";
import './style.css';
import { Box, Button, Container, Grid, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { CardHomeComponent, HeaderComponent } from "../../components";
import { cryptos } from "../../api/cryptos";
import { CardComponent } from "../../components/card";
import { TypeCrypto } from "./interface/crypto.interface";
import HomeImg from '../../utils/img/homeImg.webp';
import firstIcon from '../../utils/img/worldwide-2.svg';
import secondIcon from '../../utils/img/safe-2.svg';
import thirdIcon from '../../utils/img/support-3.svg';
import fourthIcon from '../../utils/img/economyGlobal-2.svg';
import { Image } from "@mui/icons-material";
import { useFormik } from "formik";
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";
import { TableComponent } from "../../components/table";

export const CoinList: React.FC = () => {
  const [allCryptos, setAllCryptos] = React.useState<TypeCrypto[] | null>(null)
  const [page, setPage] = React.useState(1);

  React.useEffect(()=>{
    cryptos.getAll().then((r)=>{
      setAllCryptos(r.data)
    }).catch((e)=>{
      console.error(e)
    })
  },[])

  return (
    <Container disableGutters maxWidth={false} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "76px", marginLeft: "0", marginRight: "0", padding: "0"}}>
        <Container disableGutters sx={{width: "80%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Container disableGutters sx={{margin: "0", justifyContent: "center", alignItems: "center"}}>
                  <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ width: 350 }}>NAME</TableCell>
                        <TableCell align="right">PRICE</TableCell>
                        <TableCell align="right">24H CHANGE</TableCell>
                      </TableRow>
                    </TableHead>
                      {
                        allCryptos !== null ? (
                            <TableBody sx={{ minWidth: 650 }}>
                          
                            {allCryptos!.slice((page-1)*10,(page-1)*10 + 10).map((crypto) => (
                              
                                  <TableComponent id={crypto.id} image={crypto.image} name={crypto.name} symbol={crypto.symbol} price={crypto.current_price} pricePercent={crypto.price_change_percentage_24h} marketCap={crypto.market_cap}/>
                              
                            ))}
                            </TableBody>
                          
                        ) : ""
                      }
                  </Table>
                  </TableContainer>
                </Container>
                        {
                          allCryptos !== null ? (
                            <Pagination 
                            variant="outlined"
                            color="primary"
                            sx={{mt: 5, mb:5}}
                            count={(allCryptos!.length / 10)}
                            onChange={(_, value) => {
                              setPage(value);
                              window.scroll(0, 450);
                            }}
                            ></Pagination>
                            ) : ""
                          }
        </Container>
      
    </Container>
  );
};