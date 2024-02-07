import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CarPic1 from "../../assets/car.png"
import axios from 'axios';

export default function ActionAreaCard({color, make, model, year, carid}) {
  const handleDelete = (carID) =>{
    axios.delete("http://localhost:5000/delete/cars/"+carID)
  }
  return (
    <Card sx={{ width: 300, minWidth:300, aspectRatio:1, borderRadius:5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=  {CarPic1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              {model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Make: {make}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Color: {color}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Year: {year}
          </Typography>

          <button style={{background:"#dd3333", marginTop:10, borderRadius: 4}} onClick={e=>handleDelete(carid)}>Delete</button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}