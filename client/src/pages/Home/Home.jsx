import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import './home.css';
import AboutSection from '../../components/aboutsection/About';
import WhySection from '../../components/whysection/index.jsx';
import Slide from '../../components/slide/Slide';
import styled from 'styled-components';
//import CarCard from "../../components/common/CommonCard"
import CardDisplay from '../../components/common/Carddispley.jsx';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import dayjs from 'dayjs';
import Select from '@mui/material/Select';

const HomePage = () => {
	const arr = new Array(8).fill(5);
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
									<MenuItem value={40}>Ludhiana</MenuItem>
                                    <MenuItem value={50}>Chandigarh</MenuItem>
                                    <MenuItem value={60}>Patiala</MenuItem>
                                    <MenuItem value={70}>Bathinda</MenuItem>
                                    <MenuItem value={80}>Hoshiarpur</MenuItem>
                                    <MenuItem value={90}>Moga</MenuItem>
                                    <MenuItem value={100}>Pathankot</MenuItem>
                                    <MenuItem value={110}>Mohali</MenuItem>
                                    <MenuItem value={120}>Firozpur</MenuItem>
                                    <MenuItem value={130}>Batala</MenuItem>
									<MenuItem value={140}>Gurgaon</MenuItem>
                                    <MenuItem value={150}>Noida</MenuItem>
                                    <MenuItem value={160}>Faridabad</MenuItem>
                                    <MenuItem value={170}>Ghaziabad</MenuItem>
                                    <MenuItem value={180}>Meerut</MenuItem>
                                    <MenuItem value={190}>Sonipat</MenuItem>
                                    <MenuItem value={200}>Panipat</MenuItem>
                                    <MenuItem value={210}>Rohtak</MenuItem>
                                    <MenuItem value={220}>Rewari</MenuItem>
                                    <MenuItem value={230}>Palwal</MenuItem>
									<MenuItem value={240}>Mumbai</MenuItem>
                                    <MenuItem value={250}>Bangalore</MenuItem>
                                    <MenuItem value={260}>Kolkata</MenuItem>
                                    <MenuItem value={270}>Chennai</MenuItem>
                                    <MenuItem value={280}>Hyderabad</MenuItem>
                                    <MenuItem value={290}>Pune</MenuItem>
                                    <MenuItem value={300}>Ahmedabad</MenuItem>
                                    <MenuItem value={310}>Jaipur</MenuItem>
                                    <MenuItem value={320}>Lucknow</MenuItem>
                                    <MenuItem value={330}>Surat</MenuItem>
                                    <MenuItem value={340}>Kanpur</MenuItem>
                                    <MenuItem value={350}>Nagpur</MenuItem>
                                    <MenuItem value={360}>Indore</MenuItem>
                                    <MenuItem value={370}>Thane</MenuItem>
                                    <MenuItem value={380}>Bhopal</MenuItem>
                                    <MenuItem value={390}>Visakhapatnam</MenuItem>
                                    <MenuItem value={400}>Patna</MenuItem>
                                    <MenuItem value={410}>Vadodara</MenuItem>
                                    <MenuItem value={420}>Ghaziabad</MenuItem>
                                    <MenuItem value={430}>Ludhiana</MenuItem>
                                    <MenuItem value={440}>Agra</MenuItem>
                                    <MenuItem value={450}>Nashik</MenuItem>
                                    <MenuItem value={460}>Meerut</MenuItem>
                                    <MenuItem value={470}>Rajkot</MenuItem>
                                    <MenuItem value={480}>Varanasi</MenuItem>
                                    <MenuItem value={490}>Srinagar</MenuItem>
                                    <MenuItem value={500}>Amritsar</MenuItem>
                                    <MenuItem value={510}>Aligarh</MenuItem>
                                    <MenuItem value={520}>Bikaner</MenuItem>
                                    <MenuItem value={530}>Gorakhpur</MenuItem>
                                    <MenuItem value={540}>Durgapur</MenuItem>
                                    <MenuItem value={550}>Kolhapur</MenuItem>
                                    <MenuItem value={560}>Guntur</MenuItem>
                                    <MenuItem value={570}>Shimla</MenuItem>
                                    <MenuItem value={580}>Dehradun</MenuItem>
                                    <MenuItem value={590}>Nellore</MenuItem>
                                    <MenuItem value={600}>Jammu</MenuItem>
                                    <MenuItem value={610}>Kollam</MenuItem>
                                    <MenuItem value={620}>Thrissur</MenuItem>
                                    <MenuItem value={630}>Warangal</MenuItem>
                                    <MenuItem value={640}>Ajmer</MenuItem>
                                    <MenuItem value={650}>Siliguri</MenuItem>
                                    <MenuItem value={660}>Kozhikode</MenuItem>
                                    <MenuItem value={670}>Ujjain</MenuItem>
                                    <MenuItem value={680}>Bokaro Steel City</MenuItem>
                                    <MenuItem value={690}>Mangalore</MenuItem>
                                    <MenuItem value={700}>Kurnool</MenuItem>
                                    <MenuItem value={710}>Gulbarga</MenuItem>
                                    <MenuItem value={720}>Jamshedpur</MenuItem>
                                    <MenuItem value={730}>Udaipur</MenuItem>
                                    <MenuItem value={740}>Tirunelveli</MenuItem>
                                    <MenuItem value={750}>Malegaon</MenuItem>
                                    <MenuItem value={760}>Gaya</MenuItem>
                                    <MenuItem value={770}>Jalgaon</MenuItem>
                                    <MenuItem value={780}>Ujjain</MenuItem>
                                    <MenuItem value={790}>Belgaum</MenuItem>
                                    <MenuItem value={800}>Akola</MenuItem>
                                    <MenuItem value={810}>Davanagere</MenuItem>
                                    <MenuItem value={820}>Kozhikode</MenuItem>
                                    <MenuItem value={830}>Maheshtala</MenuItem>
                                    <MenuItem value={840}>Rajahmundry</MenuItem>
                                    <MenuItem value={850}>Bokaro</MenuItem>
                                    <MenuItem value={860}>Bellary</MenuItem>
                                    <MenuItem value={870}>Patiala</MenuItem>
                                    <MenuItem value={880}>Gopalpur</MenuItem>
                                    <MenuItem value={890}>Agartala</MenuItem>
                                    <MenuItem value={900}>Bhagalpur</MenuItem>
                                    <MenuItem value={910}>Muzaffarnagar</MenuItem>
                                    <MenuItem value={920}>Bhatpara</MenuItem>
                                    <MenuItem value={930}>Panihati</MenuItem>
                                    <MenuItem value={940}>Latur</MenuItem>
                                    <MenuItem value={950}>Dhule</MenuItem>
                                    <MenuItem value={960}>Rohtak</MenuItem>
                                    <MenuItem value={970}>Korba</MenuItem>
                                    <MenuItem value={980}>Bhilwara</MenuItem>
                                    <MenuItem value={990}>Berhampur</MenuItem>
                                    <MenuItem value={1000}>Muzaffarpur</MenuItem>
                                    


								</Select>
							</FormControl>
						</div>
					</LocalizationProvider>
				</div>
			</HomeSection>
			<AboutSection />
			<CardDisplay headline="Explore SuperCars" cards={arr} />
			<CardDisplay headline="Explore SuperBikes" cards={arr} />
			<CardDisplay headline="Budget Vehicles" cards={arr} />
			<CardDisplay headline="Family Trip" cards={arr} />
			<CardDisplay headline="Special Ones" cards={arr} />




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
	height: calc(100vh - 68.5px);
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	::before {
		content: "";
		position: absolute;
		height:100%;
		width: 100%;
		z-index: -1;
		opacity: 0.95;
		top: 0px;
		left: 0px;
	}
	> div > h1 {
		font-family: "Anton", sans-serif;
	}
	> div > p {
		font-size: 1.3rem;
	}
`;
export default HomePage;
