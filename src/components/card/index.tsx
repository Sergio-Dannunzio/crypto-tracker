import React from "react";
import './style.css';
import { 
    Box,
    Container,
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableRow,
    Typography, 
} from "@mui/material";
import { useNavigate } from "react-router-dom";

type CardsProps  = {
    id: string;
    name: string;
    image: string;
    symbol: string;
    price: number;
    pricePercent: number;
    marketCap: number;
}

export const CardComponent: React.FC<CardsProps> = ({id, name, image, symbol, price, pricePercent, marketCap}) => {
    let navigate = useNavigate();
    
    return (
        <Container className="CardCrypto" disableGutters maxWidth={false} sx={{width: "160px", height: "230px",
                marginLeft: "0", marginRight: "0", marginTop: "80px", marginBottom: "80px",
                padding: "20px",
                display: "flex",flexDirection: "column",alignItems: "center", backgroundColor:"#262C2E",
                border: "solid", borderColor: "#0C1418", borderRadius: "8px",
                boxShadow:  "0px 0px 5px 5px #0C1418"}}>
            <Box
          component="img"
          sx={{
            height: 45,
            width: 45,
          }}
          alt="The house from the offer."
          src={image}
          />
          <Typography sx={{marginTop: ""}}>{name}</Typography>
          <Typography sx={{marginTop: "10px"}}>{price} US$</Typography>
          <Typography sx={{marginTop: "30px"}}>% {pricePercent}</Typography>
        </Container>
        

    )
}