import React from "react";
import './style.css';
import { Box, Button, Container, Grid, Pagination, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
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

type LoginType = {
  username: string;
}

export const HomePage: React.FC = () => {
  const [allCryptos, setAllCryptos] = React.useState<TypeCrypto[] | null>(null)
  const [page, setPage] = React.useState(1);

  React.useEffect(()=>{
    cryptos.getAll().then((r)=>{
      setAllCryptos(r.data)
    }).catch((e)=>{
      console.error(e)
    })
  },[])
  const { getSuccess } = useNotification();
  const formik = useFormik<LoginType>({
      initialValues: {
        username: ""
      },
      validationSchema: LoginValidate,
      onSubmit: (values: LoginType) => {
        console.log("asdasd");
        getSuccess(JSON.stringify(values));
      },
    });

  return (
    
    <Container disableGutters maxWidth={false} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "76px", marginLeft: "0", marginRight: "0", padding: "0"}}>
      <Container sx={{display: "flex", flexDirection: "row"}}>
        <Box
          component="img"
          sx={{
            height: 700,
            width: 680,
          }}
          alt="The house from the offer."
          src={HomeImg}
          />
          <HeaderComponent
              tittle="El dinero del futuro ya está aquí"
              description="Más de 110 millones de personas y empresas confían en nosotros para comprar, vender y gestionar criptomonedas."
              element={
                <Container sx={{display: "flex", flexDirection: "row", width: "500px"}}>
                <Box component="form" onSubmit={formik.handleSubmit}>
                            <TextField 
                                name="username" 
                                margin="normal"
                                fullWidth 
                                label="Email" 
                                type="email" 
                                sx={{ mt:2,mb:1.5, width: "300px" }} 
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                helperText={formik.touched.username && formik.errors.username}/>
                                <Button variant="contained" type="submit" sx={{ mt:2.8, marginLeft: 2.5, height: "45px"}}>
                                  Register
                                </Button>
                </Box>
                </Container>
          }
          />
        </Container>
        <Container disableGutters maxWidth={false} sx={{backgroundColor: "#0C1418",width: "100%", margin: "0", marginTop: "186px", display: "flex", flexDirection: "column"}}>
          <Container disableGutters sx={{width: "100%", marginTop: "50px"}}>
            <Typography variant="h3" className="t1">Descubra criptomonedas como Bitcoin, Ethereum y Dogecoin</Typography>
            <Typography variant="h5" className="t2" sx={{marginTop: "20px"}}>Compre, venda y gestione cientos de criptomonedas de forma fácil y segura.</Typography>
          </Container>
          <Container disableGutters sx={{width: "80%", marginRight: "260px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Container disableGutters sx={{margin: "0"}}>
                    {
                      allCryptos !== null ? (
                        <Grid container sx={{margin: "0"}}>
                          {allCryptos!.slice((page-1)*5,(page-1)*5 + 5).map((crypto) => (
                            <Grid key={crypto.id} item md={1.7} sx={{marginLeft: "20px", marginRight: "20px"}}>
                                <CardComponent id={crypto.id} image={crypto.image} name={crypto.name} symbol={crypto.symbol} price={crypto.current_price} pricePercent={crypto.price_change_percentage_24h} marketCap={crypto.market_cap}/>
                            </Grid>
                          ))}
                        </Grid>
                      ) : ""
                    }
                    </Container>

                  </Container>
                  </Container>
                  <Container disableGutters maxWidth={false} sx={{marginLeft: "", display: "flex", justifyContent: "center", alignItems: "center"}}>
                     <CardHomeComponent title={"La mayor empresa de criptomonedas que cotiza en bolsa del mundo"} description={"Operamos con transparencia financiera."} image={firstIcon}></CardHomeComponent>       
                     <CardHomeComponent title={"Tus bienes están protegidos"} description={"Nuestras medidas de gestión de riesgos están diseñadas para proteger sus activos."} image={secondIcon}></CardHomeComponent>
                     <CardHomeComponent title={"Obtenga la ayuda que necesita, cuando la necesita"} description={"Siempre puede ponerse en contacto con nuestro equipo de soporte para obtener soluciones rápidas a problemas comunes."} image={thirdIcon}></CardHomeComponent>
                     <CardHomeComponent title={"Mejores prácticas de la industria"} description={"CoinMarket admite una variedad de las monedas digitales más populares."} image={fourthIcon}></CardHomeComponent>
                  </Container>
    </Container>
  );
};