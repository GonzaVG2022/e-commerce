import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";
import Cart_ from "./Cart";
import { Cart } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import samsung from "/samsung.png";

import { Link, useNavigate } from "react-router-dom";
import LogOut from "/src/pages/LogOut";
import { useSelector } from "react-redux";

function Navbar() {
	const [launch, setLaunch] = useState(false);
	const [clicked, setClicked] = useState(false);
	const isLogged = useSelector((state) => state.isLogged);

	const handleLaunch = (launch) => {
		setLaunch(launch);
	};

	const handleClick = () => {
		//cuando esta true lo pasa a false y vice versa
		setClicked(!clicked);
	};

	return (
		<>
			<NavContainer>
				<Link to="/">
					<h2>
						<span>E-</span>comerce
					</h2>
				</Link>

				<img className="I-S-A" src={samsung} alt="" />

				<div className={`links ${clicked ? "active" : ""}`}>
					<Link to="/">Products</Link>
					<Link to="/purchases">Purchases</Link>
					{!isLogged ? <Link to="/login">Login</Link> : <LogOut />}

					<Cart_
						sendLaunch={(launch) => handleLaunch(launch)}
						launch={launch}
					/>
				</div>
				<Button variant="primary" onClick={() => setLaunch(!launch)}>
					<Cart />
				</Button>
				<div className="burguer">
					<BurguerButton
						clicked={clicked}
						handleClick={handleClick}
					/>
				</div>
				<BgDiv
					className={`initial ${clicked ? " active" : ""}`}
				></BgDiv>
			</NavContainer>
		</>
	);
}

export default Navbar;
const NavContainer = styled.nav`
	h2 {
		color: black;
		font-weight: 400;
		span {
			font-weight: bold;
			color: #137ea7;
		}
	}
	.I-S-A {
		width: 18%;
	}

	padding: 0.8rem;
	margin: 0.8rem;
	background: silver;
	border: 4px solid #137ea7;
	display: flex;
	align-items: center;
	justify-content: space-between;
	a {
		color: black;
		text-decoration: none;
		margin-right: 1rem;
	}

	.links {
		position: absolute;
		top: -700px;
		left: -2000px;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		transition: all 0.5s ease;
		a {
			color: black;
			font-size: 2rem;
			display: block;
		}
		@media (min-width: 768px) {
			position: initial;
			margin: 0;
			a {
				font-size: 1.3rem;
				color: black;
				display: inline;
				font-weight: sans-serif;
				z-index: 1;
			}
			display: block;
		}
	}
	.links.active {
		width: 100%;
		display: block;
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		top: 15%;
		left: 0;
		right: 0;
		text-align: center;

		a {
			font-size: 3rem;
			color: black;
			padding: 20px;
			z-index: 4;
			position: relative;
		}
	}
	.burguer {
		@media (min-width: 768px) {
			display: none;
		}
	}
`;

const BgDiv = styled.div`
	background: rgba(255, 255, 255, 0.1);
	border: 4px solid #137ea7;
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	position: absolute;
	top: -1000px;
	left: -1000px;
	width: 100%;
	height: 100%;
	z-index: 3;
	transition: all 0.5s ease;

	&.active {
		border-radius: 0 0 80% 0;
		top: 110px;
		left: 13px;
		width: 90%;
		height: 85%;
	}
`;
