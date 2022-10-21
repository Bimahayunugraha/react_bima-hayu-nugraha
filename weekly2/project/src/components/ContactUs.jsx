import React, { useState } from "react";

const ContactUs = () => {
	const baseValue = {
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	};
	const [values, setValues] = useState(baseValue);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (values === "") {
			alert("Something went worong!!!");
		} else {
			alert(`
            Name: ${values.firstName}${values.lastName}
            Email: ${values.email}
            Message: ${values.message}

            Thank you for submitting the form.
            `);
		}
		setValues(baseValue);
	};

	return (
		<div className="contact">
			<div className="container">
				<div className="section-header">
					<h2>Contact</h2>
					<p>Contact Us</p>
				</div>
				<div className="row gy-4">
					<div className="col-lg-6">
						<div className="row gy-4">
							<div className="col-md-6">
								<div className="info-box">
									<i className="bi bi-geo-alt"></i>
									<h3>Address</h3>
									<p>
										Magetan,
										<br />
										Jawa Timur, 63396
									</p>
								</div>
							</div>
							<div className="col-md-6">
								<div className="info-box">
									<i className="bi bi-telephone"></i>
									<h3>Call Us</h3>
									<p>+62 82 902 902 902</p>
								</div>
							</div>
							<div className="col-md-6">
								<div className="info-box">
									<i className="bi bi-envelope"></i>
									<h3>Email Us</h3>
									<p>godev@gmail.com</p>
								</div>
							</div>
							<div className="col-md-6">
								<div className="info-box">
									<i className="bi bi-clock"></i>
									<h3>Open Hours</h3>
									<p>
										Monday - Friday
										<br />
										9:00AM - 05:00PM
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<form onSubmit={handleSubmit} id="contact-form" name="contact-form" className="contact-form">
							<div className="row gy-4">
								<div className="col-md-6">
									<input
										type="text"
										name="firstName"
										className="form-control"
										onChange={handleChange}
										value={values.firstName}
										placeholder="Your First Name"
										required
									/>
								</div>

								<div className="col-md-6 ">
									<input
										type="text"
										className="form-control"
										name="lastName"
										onChange={handleChange}
										value={values.lastName}
										placeholder="Your Last Name"
										required
									/>
								</div>

								<div className="col-md-12">
									<input type="email" className="form-control" name="email" onChange={handleChange} value={values.email} placeholder="Your Email" required />
								</div>

								<div className="col-md-12">
									<textarea className="form-control" name="message" rows="6" onChange={handleChange} value={values.message} placeholder="Message"></textarea>
								</div>

								<div className="col-md-12 text-center">
									<button type="submit">Send Message</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
