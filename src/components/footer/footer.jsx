import React from "react";
import "./footer.scss";
import { easy, face, insta, li, twi } from "../../assets";

function Footer() {
	return (
		<div className="footer pb-16">
			<div className="__flex flex justify-between wrap items-start">
				<div className="__1 flex flex-col gap-10">
					<img src={easy} alt="img.png" className="foot_logo" />
					<p>
						Copyright © 2023 Eazipay.
						<br />
						All rights reserved
					</p>
					<div className="flex flex-row gap-3 items-center justify-start">
						<img src={insta} alt="img.png" />
						<img src={twi} alt="img.png" />
						<img src={li} alt="img.png" />
						<img src={face} alt="img.png" />
					</div>
				</div>
				<div className="___ flex flex-col gap-6">
					<h1>Product</h1>
					<div className="flex flex-col gap-3">
						<a>Indidual</a>
						<a>Businesses</a>
						<a>Request Demo</a>
						<a>Pricing</a>
					</div>
				</div>
				<div className="___ flex flex-col gap-6">
					<h1>Legal</h1>
					<div className="flex flex-col gap-3">
						<a>Privacy Policy</a>
						<a>Terms of Service</a>
					</div>
				</div>
				<div className="___ flex flex-col gap-6">
					<h1>Resources</h1>
					<div className="flex flex-col gap-3">
						<a>FAQs</a>
						<a>Blog</a>
						<a>Career</a>
						<a>Customer Stories</a>
					</div>
				</div>
				<div className="___ flex flex-col gap-6">
					<h1>Contact us</h1>
					<div className="flex flex-col gap-3">
						<a>eazipay@gmail.com</a>
						<p>+234 816 878 9518</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
