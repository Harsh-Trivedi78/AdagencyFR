import React from "react";

const About = () => {
	return (
		<div className="about-page">
			<section className="about-hero">
				<div className="container">
					<div className="about-hero-content">
						<h1>
							Transforming Businesses with Innovative
							Strategies and Cutting-Edge Technology
						</h1>
						<p>
							We are a team of passionate and experienced
							professionals who are dedicated to helping
							businesses succeed. We offer a wide range
							of services, including digital marketing,
							web development, and brand strategy, all
							designed to help you achieve your goals.
						</p>
					</div>
					<div className="about-hero-image">
						{/* Add your image here */}
					</div>
				</div>
			</section>
			<section className="about-values">
				<div className="container">
					<h2>Our Values</h2>
					<p>
						We believe in the power of collaboration,
						innovation, and integrity. We are committed
						to providing our clients with exceptional
						service and exceeding their expectations.
					</p>
					<div className="value-items">
						<div className="value-item">
							<h3>Innovation</h3>
							<p>
								We are constantly exploring new ideas
								and technologies to help our clients stay
								ahead of the curve.
							</p>
						</div>
						<div className="value-item">
							<h3>Collaboration</h3>
							<p>
								We believe that teamwork is essential
								to achieving success. We work closely with
								our clients to understand their needs and
								develop solutions that meet their specific
								requirements.
							</p>
						</div>
						<div className="value-item">
							<h3>Integrity</h3>
							<p>
								We are committed to ethical business
								practices and building long-term
								relationships with our clients.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="about-team">
				<div className="container">
					<h2>Our Team</h2>
					<p>
						Our team is comprised of highly skilled and
						experienced professionals with a wide range
						of expertise. We are passionate about what
						we do and are committed to helping our clients
						achieve their business goals.
					</p>
					<div className="team-members">
						{/* Add your team members here */}
						<div className="team-member">
							{/* Add team member image and details */}
						</div>
						<div className="team-member">
							{/* Add team member image and details */}
						</div>
						<div className="team-member">
							{/* Add team member image and details */}
						</div>
					</div>
				</div>
			</section>
			<section className="about-contact">
				<div className="container">
					<h2>Contact Us</h2>
					<p>
						We would love to hear from you! Please
						contact us to discuss your business needs
						and learn how we can help you achieve
						success.
					</p>
					{/* Add contact form or details here */}
				</div>
			</section>
		</div>
	);
};

export default About;