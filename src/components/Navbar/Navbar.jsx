import { React, useState } from "react";
import { easy, menu } from "../../assets";
import "./navbar.scss";

function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<div className="nav flex flex-row justify-between  items-center">
			<div className="flex a_lft items-center">
				<div>
					<img src={easy} alt="logo.png" />
				</div>
				<div className="middle flex gap-10 ml-20">
					<a href="">Individual</a>
					<a href="">Business</a>
					<a href="">Pricing</a>
					<a href="">Set your payroll</a>
				</div>
			</div>
			<div className="lst_btn flex items-center gap-6">
				<a href="">Log in</a>
				<a href="" className="reg">
					Register
				</a>
			</div>
			<div className="menu">
				<div
					onClick={() => {
						setOpen((prevState) => !prevState);
					}}
				>
					<img src={menu} alt="img.png" />
				</div>
			</div>
			{open && (
				<div className="abs">
					<div className="flex flex-col gap-12 items-start justify-start">
						<div className="_middle flex flex-col gap-10">
							<a href="">Individual</a>
							<a href="">Business</a>
							<a href="">Pricing</a>
							<a href="">Set your payroll</a>
						</div>
						<div className="_lst_btn flex items-center gap-6">
							<a href="">Log in</a>
							<a href="" className="reg">
								Register
							</a>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Navbar;
