import React from "react";
import { Footer, Navbar } from "../../components";
import "./home.scss";
import {
	apple,
	frame,
	play,
	bus,
	card1,
	temp,
	p,
	wire,
	pat,
	dot,
	bro,
	dot2,
	circle,
} from "../../assets";

function Home() {
	return (
		<div className="home">
			<div className="___x pt-6">
				<div className="__x">
					<Navbar />
					<main className="_main lg:mt-24 mt-18">
						<div className="__cont flex items-center justify-between lg:flex-row md:gap-5 gap-10 flex-col">
							<div className="flex flex-col gap-20">
								<div className="pay_roll">
									<h1>
										Run your <span className="__1">payroll</span>{" "}
										<span className="__2">easily</span> in{" "}
										<span className="__3">seconds</span>
									</h1>
									<p className="pt-6 mb-6">
										We’ve built an all-inclusive simple solution for
										<br /> individual and businesses to manage staff, pay
										<br /> salaries, bills, and relevant taxes all at once.
									</p>
									<a href="">Start Using Free, Forever</a>
								</div>
								{/* Second Div */}
								<div className="down_load">
									<h2>Download the Eazipay App</h2>
									<div className="flex items-center mt-4 gap-4">
										<div>
											<img src={apple} alt="play.png" />
										</div>
										<div>
											<img src={play} alt="play.png" />
										</div>
									</div>
								</div>
							</div>
							<div>
								<img src={frame} alt="frame.png" />
							</div>
						</div>
					</main>
				</div>
			</div>

			{/* Individual */}
			<div className="ind text-center">
				<div className="__x">
					<div className="mb-8">
						<h1>For Individuals and Businesses</h1>
						<p className="mt-4">
							Join 200+ businesses using Eazipay's easy solution.
						</p>
					</div>
					<div className="flex flex_card mb-8">
						<img src={temp} alt="img.png" />
						<img src={card1} className="img_1" alt="img.png" />
						<img src={card1} className="img_1" alt="img.png" />
					</div>
					<div className="_txt">
						<p>
							We are happy to answer your queries. Please, reach us at
							<br />
							<span>hello@myeazipay.com</span> and expect our response shortly
							after.
						</p>
					</div>
				</div>
			</div>
			{/* Easy */}
			<div className="how __x">
				<div className="text-center">
					<h1 className="mb-4">How Eazipay Works</h1>
					<p>Get started in 3 simple steps.</p>
				</div>
				<div className="mt-20 flex gap-20 justify-center items-center">
					<div className="ellip">
						<img src={p} alt="" />
					</div>
					<div>
						<img src={wire} alt="" />
					</div>
				</div>
			</div>
			{/* payment */}
			<div className="pay__cont">
				<img src={pat} className="pay_pat" />
				<img src={dot} className="pat__2" />
				<div className="__x pay flex items-center justify-center gap-20">
					<div className="flex flex-col gap-10">
						<h1>
							Free forever
							<br /> for your <span>salary</span>
							<br /> <span>payment</span>
						</h1>
						<div>
							<p>Subscribe to the Eazilife today</p>
							<div className="flex items-center mt-4 gap-4">
								<div>
									<img src={apple} alt="play.png" />
								</div>
								<div>
									<img src={play} alt="play.png" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<img src={bro} alt="img.jpg" />
					</div>
				</div>
			</div>
			{/* demo */}
			<div className="demo__cont">
				<img src={dot2} alt="" className="left" />
				<img src={circle} alt="" className="right" />
				<div className="flex justify-center gap-20 items-center __x demo">
					<div>
						<h1>
							Get an Exclusive <br />
							Demo of Eazipay
						</h1>
						<p className="mt-6">
							Our greatest priority is to put you and
							<br /> your business first. Let’s show you how
							<br /> we can help.
						</p>
					</div>
					{/* form */}
					<div className="form text-center p-8">
						<h1 className="mb-3">First things first</h1>
						<p className="mb-6">
							We want to serve you better. Tell us a bit
							<br /> about yourself or company
						</p>
						<div className="btn__cont p-2 flex gap-2">
							<button className="btn1">Individual</button>
							<button className="btn2">Company</button>
						</div>
						<form action="" className="flex flex-col">
							<input type="text" placeholder="First Name" className="mt-6" />
							<input type="text" placeholder="Last Name" className="mt-6" />
							<input type="text" placeholder="Email" className="mt-6" />
							<input type="text" placeholder="Job Tittle" className="mt-6" />
							<input
								type="text"
								placeholder="Company Size "
								className="mt-6 mb-6"
							/>
							<button type="submit">Request Demo</button>
						</form>
					</div>
				</div>
			</div>
			{/* Footer */}
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default Home;
