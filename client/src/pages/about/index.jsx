import AboutSection from '../../components/aboutsection/About.jsx';
import './about.css';
const AboutPage = () => {
	return (
		<div>
			<div className="">
				<h1 className="heading">About Long Drive</h1>
				<AboutSection />
			</div>
			<div className="about-content">
				<div className="section">
					<h1 className="group-head">Our Fleet</h1>
					<div className="content">
						Choose from our diverse fleet of top-quality vehicles, including a range of cars and bikes to
						suit your preferences and needs. From compact cars for urban adventures to spacious SUVs for
						family road trips, we have a vehicle for every occasion. Our bikes cater to those seeking an
						exhilarating two-wheeled experience, whether it's for commuting or exploring scenic routes.
					</div>
				</div>
				<div className="section">
					<h1 className="group-head">Easy Booking</h1>
					<div className="content">
						At LongDrive, we understand the value of your time. Our user-friendly online platform ensures a
						seamless booking experience. Simply browse our selection, choose the vehicle that suits you
						best, select your rental period, and make a reservation with just a few clicks. We also offer a
						dedicated customer support team ready to assist you throughout the process.
					</div>
				</div>
				<div className="section">
					<h1 className="group-head">Affordable Rates</h1>
					<div className="content">
						We believe that quality transportation should be accessible to everyone. Enjoy competitive and
						transparent pricing with no hidden fees. Our commitment to affordability means you can
						experience the freedom of the open road without breaking the bank.
					</div>
				</div>
				<div className="section">
					<h1 className="group-head">Flexible Operations</h1>
					<div className="content">
						Whether you need a vehicle for a few hours, a day, a week, or longer, we offer flexible rental
						options to accommodate your schedule. Enjoy the convenience of a short-term rental for
						spontaneous adventures or opt for a long-term arrangement for extended travel plans.
					</div>
				</div>
				<div className="section">
					<h1 className="group-head">Safety and Maintainance</h1>
					<div className="content">
						Your safety is our top priority. Our vehicles undergo regular maintenance checks and thorough
						inspections to ensure they meet the highest safety standards. Rest assured, you'll be hitting
						the road in a reliable and well-maintained vehicle.
					</div>
				</div>
			</div>
		</div>
	);
};
export default AboutPage;
