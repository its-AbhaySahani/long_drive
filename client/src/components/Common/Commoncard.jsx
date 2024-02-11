import * as React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';

export default function ActionAreaCard({ color, brand, model, carid, seat, fair, mileage, image }) {
  const handleDelete = (carID) => {
    axios.delete(`http://localhost:5000/delete/cars/${carID}`); // Use template literals for dynamic URL
  }

  return (
    <Card sx={{ width: 300, minWidth: 300, aspectRatio: 1, borderRadius: 5 }}>
      <Link to={`/cars/${carid}`} style={{ textDecoration: 'none' }}> {/* Link to car details page */}
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={model}
            sx={{ backgroundColor: 'white' }}
          />
          <CardContent sx={{ padding: '10px 20px' }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ textTransform: 'capitalize', color: '#ff7777' }}>
              {model}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Brand</span> <span>{brand}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Color</span> <div style={{ backgroundColor: color, height: 10, width: 10, display: 'inline-block' }}></div>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Fair</span> <span>{fair}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Mileage</span> <span>{mileage}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Seat</span> <span>{seat}</span>
            </Typography>
            <button style={{ background: "#dd3333", marginTop: 10, borderRadius: 4 }} onClick={e => handleDelete(carid)}>Delete</button>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
