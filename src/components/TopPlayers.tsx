import { Text } from "@arwes/core"
import { nanoid } from "nanoid"
import React from "react"
import TopPlayerCard from "./TopPlayerCard"
import img1 from "../assets/topPlayer/mosoraner.png"
import img2 from "../assets/topPlayer/SGI_79.png"
import img3 from "../assets/topPlayer/SGI_94.png"
const TopPlayers = (): JSX.Element => {
	interface ICardData {
		img: string
		name: string
		points: number
		type: string
	}
	const dataArr: ICardData[] = [
		{
			img: img1,
			name: "Ins Op",
			points: 291207,
			type: "Warlord"
		},
		{
			img: img2,
			name: "Negotator",
			points: 291207,
			type: "Warlord"
		},
		{
			img: img3,
			name: "Amoks",
			points: 291207,
			type: "Warlord"
		}
	]
	return (
		<div className="topPlayers section">
			<div className="container">
				<Text as="h1" className="main-heading">
					Top Players
				</Text>
				<div className="row column">
					{dataArr.map((e) => {
						return <TopPlayerCard data={ e } key={ nanoid() }/>
					})}
				</div>
			</div>
		</div>
	)
}
export default TopPlayers