import React from "react";
import Lambert from "../images/DSC_4110+k.jpg";

export const Info = () => {
	return (
		<div class="info">
			<img src={Lambert} alt="lambert" />
			<h1>Lambert Wijshake</h1>
			<h2>Frontend Developer</h2>
			<h5>Lambert Wijshake Creations Website</h5>
			<div className="info__buttons">
				<button className="info__buttons--button1">
					<a href="mailto:#">
						<i className="fa fa-envelope"></i>Email
					</a>
				</button>
				<button className="info__buttons--button2">
					<a href="#">
						<i className="fa fa-linkedin"></i>Linkedin
					</a>
				</button>
			</div>
		</div>
	);
};
