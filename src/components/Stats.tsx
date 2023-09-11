import { Text } from "@arwes/core"
import { nanoid } from "nanoid"
import React from "react"
import img1 from "../assets/stats/Gruppe 183.png"
import img2 from "../assets/stats/Gruppe 184.png"
import img3 from "../assets/stats/Gruppe 185.png"
import img4 from "../assets/stats/Gruppe 186.png"
const Stats = (): JSX.Element => {
	interface IData {
		img: string
		number: number
		type: string
	}
	const dataArr: IData[] = [
		{
			img: img1,
			number: 5.0,
			type: "players"
		},
		{
			img: img2,
			number: 5.0,
			type: "fights"
		},
		{
			img: img3,
			number: 5.0,
			type: "alliances"
		},
		{
			img: img4,
			number: 5.0,
			type: "credits"
		}
	]
	const FloatingNum = 3
	return (
		<div className="stats section">
			<div className="container">
				<Text as="h1" className="main-heading">
					STATS
				</Text>
				<div className="row">
					{dataArr.map((e) => (
						<div
							className="col col-xs-12 col-sm-6 col-md-6 col-lg-3 column"
							key={ nanoid() }
						>
							<img alt="img" src={ e.img }/>
							<Text as="h3" className="heading">
								{e.number.toFixed(FloatingNum)}
							</Text>
							<Text as="p" className="p">
								{e.type.toUpperCase()}
							</Text>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
export default Stats