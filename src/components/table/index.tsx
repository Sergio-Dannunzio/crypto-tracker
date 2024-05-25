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

export const TableComponent: React.FC<CardsProps> = ({id, name, image, symbol, price, pricePercent, marketCap}) => {
    let navigate = useNavigate();
    
    return (
        
        
            <TableRow
              key={name}
              sx={{ '&:last-child td, &:last-child th': { border: 0} }}
            >
              <TableCell component="th" scope="row" sx={{display: "flex", alignItems: "center"}}>
                <Box
                    component="img"
                    sx={{
                        height: 45,
                        width: 45,
                    }}
                    alt="The house from the offer."
                    src={image}
                    />
                    <Typography sx={{marginLeft: "20px"}}>{name}</Typography>
              </TableCell>
              <TableCell align="right">${price}</TableCell>
              <TableCell  align="right"><Typography className={pricePercent > 0 ? "green" : "red"}>%{pricePercent}</Typography></TableCell>
            </TableRow>
        
        

    )
}