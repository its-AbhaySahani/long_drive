import styled from 'styled-components';
import './about.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Container} from '@mui/material';

const AboutSection = () => {
	return (
		<Container maxWidth="xl">
			<h2 className="group-head">A vehicle for every occasion</h2>
			<p className="content">
				Welcome to LongDrive, your premier destination for convenient and reliable car and bike rental services.
				Whether you're exploring a new city, embarking on a weekend getaway, or simply need a reliable mode of
				transportation, we've got you covered.We offer city taxis, cars, and bikes for every occasion at the
				best prices, available on an hourly basis.Welcome to LongDrive, your premier destination for convenient
				and reliable car and bike rental services. Whether you're exploring a new city, embarking on a weekend
				getaway, or simply need a reliable mode of transportation, we've got you covered.
			</p>
			<CardsContainer maxWidth="xl">
				<Card sx={{ maxWidth: 500 }}>
					<CardActionArea>
						<CardMedia
							component="img"
							height="400"
							image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
							alt="Dream Carsa"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								Dream Cars
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Cruise out of town with affordable one-way and round-trip fares through our intercity
								travel service. Select from a fleet of AC cabs driven by top-notch partners, available
								within 1 hour or book up to 7 days in advance. We've got you covered across India with a
								presence in 90+ cities and over 500 one-way routes.
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card sx={{ maxWidth: 500 }}>
					<CardActionArea>
						<CardMedia
							component="img"
							height="400"
							image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6O_TwqXkA8cZvpAQhervaO4BEjOtbXjYmdg&usqp=CAU.jpg"
							alt="Super Bikes"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								Super Bikes
							</Typography>
							<Typography variant="body" color="text.secondary">
								Zoom out of town with our affordable one-way and round-trip fares in our intercity
								travel service. Choose from a variety of superbikes, all driven by top partners,
								available within 1 hour or book up to 7 days in advance. Covering 90+ cities with over
								500 one-way routes across India.
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card sx={{ maxWidth: 500 }}>
					<CardActionArea>
						<CardMedia
							component="img"
							height="400"
							image="https://img.freepik.com/free-vector/car-rental-concept-illustration_114360-9267.jpg"
							alt="Rentals"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								Rentals
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Experience the freedom with Long Drive! Rent a car or bike whenever and wherever you
								desire. Whether it's a day-long business meeting, a shopping spree with friends, or just
								exploring a new city, we've got you covered. Packages start at 1 hour and can be
								extended up to 12 hours!
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</CardsContainer>
		</Container>
	);
};

const CardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 20px;
	margin-top: 20px;
	flex-wrap: nowrap;
`;

export default AboutSection;
