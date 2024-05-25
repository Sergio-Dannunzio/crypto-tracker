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
    title: string;
    description: string;
    image: string;
}

export const CardHomeComponent: React.FC<CardsProps> = ({title, description, image}) => {
    let navigate = useNavigate();
    
    return (
        <Container className="CardCrypto" disableGutters maxWidth={false} sx={{width: "280px", height: "500px",
                marginLeft: "40px", marginRight: "40px", marginTop: "80px", marginBottom: "80px",
                padding: "20px",
                display: "flex",flexDirection: "column",alignItems: "center", backgroundColor:"#262C2E",
                border: "solid", borderColor: "#0C1418", borderRadius: "8px",
                boxShadow:  "0px 0px 5px 5px #0C1418"}}>
            <Box
          component="img"
          sx={{
            height: 60,
            width: 120,
          }}
          alt="The house from the offer."
          src={image}
          />
          <Typography variant="h5" sx={{marginTop: "40px"}}>{title}</Typography>
          <Typography sx={{marginTop: "40px"}}>{description}</Typography>
        </Container>

    )
}