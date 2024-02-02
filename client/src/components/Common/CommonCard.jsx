import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CarPic1 from "../../assets/car.png"

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=  {CarPic1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Super Modal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sabse badhiya car h bhai lelo
            ...1000rs per hour
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}