import { Text } from "@arwes/core"
import { nanoid } from "nanoid"
import LandingBox from "./LandingBox"
import Navbar from "./Navbar"
import React, { useState } from "react"
import icon1 from "../assets/landing/icon-battle.png"
import icon2 from "../assets/landing/icon-money-bag.png"
import icon3 from "../assets/landing/icon-poison.png"
import img1 from "../assets/landing/commandship.jpg"
import img2 from "../assets/landing/raumstation-grün-2.png"
import logo from "../assets/landing/UniverseDawn.png"
const Landing = (): JSX.Element => {
	interface IData {
		heading: string
		icon: string
		img: string
		paragraph: string
	}
	const dataArr: IData[] = [
		{
			heading: "WARLORD",
			icon: icon1,
			img: img1,
			paragraph:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit."
		},
		{
			heading: "TRADERS",
			icon: icon2,
			img: img2,
			paragraph:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit."
		},
		{
			heading: "FREELANCING",
			icon: icon3,
			img: img1,
			paragraph:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit."
		}
	]
	const [isActive, setActive] = useState<boolean>(false)
	return (
		<div className="landing section">
			<div className="header row">
				<div className="header-logo col">
					<img alt="logo" src={ logo }/>
				</div>
				<div
					className="menu col"
					onClick={ (): void => setActive((isPrevisos) => !isPrevisos) }
				>
					<span className="material-symbols-outlined">menu</span>
				</div>
			</div>
			<Navbar
				classNameHeader={ `nav-header ${isActive
					? "active"
					: ""
				}` }
			/>
			<div className="container">
				<Navbar/>
				<div className="logo">
					<img alt="logo" src={ logo }/>
				</div>
				<div className="row boxs">
					{dataArr.map((e) => (
						<div
							className="col col-xs-12 col-sm-6 col-md-4 col-lg-4"
							key={ nanoid() }
						>
							<LandingBox data={ e }/>
						</div>
					))}
				</div>
				<Text as="h1" className="Heading">
					CHOSSE YOUR PROFESSION
				</Text>
			</div>
		</div>
	)
}
export default Landing