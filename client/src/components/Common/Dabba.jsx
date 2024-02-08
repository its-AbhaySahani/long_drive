import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import carimage from "../../assets/car.png"
export default function Dabba() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {carimage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Vehicle
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rent You Vehicle on hourly basis
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}