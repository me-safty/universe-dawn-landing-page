import { Text } from "@arwes/core"
import { nanoid } from "nanoid"
import FeatureBox from "./FeatureBox"
import React from "react"
import img1 from "../assets/features/Schnittmenge 26.png"
import img2 from "../assets/features/Schnittmenge 10.png"
import img3 from "../assets/features/Schnittmenge 27.png"
import img4 from "../assets/features/Schnittmenge 34.png"
import img5 from "../assets/features/Schnittmenge 28.png"
import img6 from "../assets/features/Schnittmenge 29.png"
import img7 from "../assets/features/Schnittmenge 30.png"
import img8 from "../assets/features/Schnittmenge 33.png"
import img9 from "../assets/features/Schnittmenge 32.png"
const Features = (): JSX.Element => {
	interface IData {
		heading: string
		img: string
		isAvailability: boolean
		paragraph: string
	}
	const dataArr: IData[] = [
		{
			heading: "3 profession",
			img: img1,
			isAvailability: true,
			paragraph:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam."
		},
		{
			heading: "3 profession",
			img: img2,
			isAvailability: true,
			paragraph:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam."
		},
		{
			heading: "3 profession",
			img: img3,
			isAvailability: true,
			paragraph:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam."
		},
		{
			heading: "3 profession",
			img: img4,
			isAvailability: true,
			paragraph:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam."
		},
		{
			heading: "3 profession",
			img: img5,
			isAvailability: true,
			paragraph:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam."
		},
		{
			heading: "3 profession",
			img: img6,
			isAvailability: true,
			paragraph:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam."
		},
		{
			heading: "3 profession",
			img: img7,
			isAvailability: false,
			paragraph:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam."
		},
		{
			heading: "3 profession",
			img: img8,
			isAvailability: false,
			paragraph:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam."
		},
		{
			heading: "3 profession",
			img: img9,
			isAvailability: false,
			paragraph:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam."
		}
	]
	return (
		<div className="features section">
			<div className="container">
				<Text as="h1" className="main-heading">
					Features
				</Text>
				<div className="row">
					{dataArr.map((e) => (
						<div
							className="col col-xs-12 col-sm-6 col-md-6 col-lg-4"
							key={ nanoid() }
						>
							<FeatureBox data={ e }/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
export default Features