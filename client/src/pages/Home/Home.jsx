import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import './home.css';
import AboutSection from '../../components/aboutsection/About';
import WhySection from '../../components/whysection/Why';
import Slide from '../../components/slide/Slide';
import styled from 'styled-components';
//import CarCard from "../../components/common/CommonCard"
import CardDisplay from '../../components/common/CardDisplay.jsx';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import dayjs from 'dayjs';
import Select from '@mui/material/Select';

const HomePage = () => {
	const arr = new Array(5).fill(5);
	const [ value, setValue ] = useState([ dayjs('2022-04-17'), dayjs('2022-04-21') ]);

	const [ location, setLocation ] = useState('');
	return (
		<Container>
			<HomeSection>
				<div className="hero">
					<div className="head-text"> Drive To Your Destination </div>
					<div className="head-subtext"> Choose Your Route </div>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<div style={{ display: 'flex', gap: '10px', margin: '10px' }}>
							<DateTimePicker
								label="Start Time"
								viewRenderers={{
									hours: renderTimeViewClock,
									minutes: renderTimeViewClock,
									seconds: renderTimeViewClock
								}}
								sx={{
									background: '#222222'
								}}
							/>

							<DateTimePicker
								label="End Time"
								viewRenderers={{
									hours: renderTimeViewClock,
									minutes: renderTimeViewClock,
									seconds: renderTimeViewClock
								}}
								sx={{
									background: '#222222'
								}}
							/>
							<FormControl fullwidth>
								<InputLabel id="location-select-label">Location</InputLabel>
								<Select
									labelId="location-select"
									id="location-select"
									value={location}
									label="Location"
									onChange={(e) => setLocation(e.target.value)}
									sx={{
										width: '200px',
										background: '#222222'
									}}
								>
									<MenuItem value={10}>Jalandhar</MenuItem>
									<MenuItem value={20}>Phagwara</MenuItem>
									<MenuItem value={30}>Amritsar</MenuItem>
								</Select>
							</FormControl>
						</div>
					</LocalizationProvider>
				</div>
			</HomeSection>
			<AboutSection />
			<CardDisplay headline="Available Cars" cards={arr} />
			<WhySection />

			<Slide />
		</Container>
	);
};
const Container = styled.div``;
const HomeIntro = styled.div`
	margin: 20px;
	color: #505056;
	background-color: #121212;
	border-radius: 38px;
	> h2 {
		font-size: 2.6rem;
	}
`;

const HomeSection = styled.section`
	height: 400px;
	margin-bottom: 13rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	::before {
		content: "";
		position: absolute;
		height: 80%;
		width: 100%;
		z-index: -1;
		opacity: 0.95;
		top: 0px;
		left: 0px;
	}
	> div {
		margin-top: 100px;
	}
	> div > h1 {
		font-family: "Anton", sans-serif;
	}
	> div > p {
		font-size: 1.3rem;
	}
`;
export default HomePage;
