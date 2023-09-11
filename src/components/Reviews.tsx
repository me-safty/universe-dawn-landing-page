import { Text } from "@arwes/core"
import { nanoid } from "nanoid"
import Carousel from "react-simply-carousel"
import LeftArrow from "./LeftArrow"
import React, { useState } from "react"
import ReviewCard from "./ReviewCard"
import RightArrow from "./RightArrow"
import img1 from "../assets/topPlayer/mosoraner.png"
import img2 from "../assets/topPlayer/SGI_79.png"
import img3 from "../assets/topPlayer/SGI_94.png"
import img4 from "../assets/features/Schnittmenge 34.png"
import img5 from "../assets/features/Schnittmenge 28.png"
import img6 from "../assets/features/Schnittmenge 29.png"
const Reviews = (): JSX.Element => {
	interface IData {
		dis: string
		heading: string
		img: string
		name: string
		type: string
	}
	const dataArr: IData[] = [
		{
			dis: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet",
			heading: "Lorem, ipsum.",
			img: img1,
			name: "InsOp",
			type: "Warlord"
		},
		{
			dis: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet",
			heading: "Lorem, ipsum.",
			img: img2,
			name: "Nevegator",
			type: "Traders"
		},
		{
			dis: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet",
			heading: "Lorem, ipsum.",
			img: img3,
			name: "Amoks",
			type: "Warlord"
		},
		{
			dis: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet",
			heading: "Lorem, ipsum.",
			img: img4,
			name: "Rooky",
			type: "Warlord"
		},
		{
			dis: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet",
			heading: "Lorem, ipsum.",
			img: img5,
			name: "InsOp",
			type: "Warlord"
		},
		{
			dis: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet",
			heading: "Lorem, ipsum.",
			img: img6,
			name: "InsOp",
			type: "Warlord"
		}
	]
	const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)
	return (
		<div className="reviews section">
			<div className="container">
				<Text as="h1" className="main-heading">
					reviews
				</Text>
				<Carousel
					activeSlideIndex={ activeSlideIndex }
					backwardBtnProps={ {
						children: <LeftArrow/>,
						style: {
							backgroundColor: "transparent"
						}
					} }
					containerProps={ {
						style: {
							flexWrap: "nowrap"
						}
					} }
					forwardBtnProps={ {
						children: <RightArrow/>,
						style: {
							backgroundColor: "transparent"
						}
					} }
					itemsToShow={ 3 }
					onRequestChange={ setActiveSlideIndex }
					responsiveProps={ [
						{
							itemsToShow: 3,
							minWidth: 992
						},
						{
							itemsToShow: 2,
							maxWidth: 992,
							minWidth: 768
						},
						{
							itemsToShow: 1,
							maxWidth: 767
						}
					] }
					speed={ 400 }
				>
					{dataArr.map((e) => (
						<ReviewCard data={ e } key={ nanoid() }/>
					))}
				</Carousel>
			</div>
		</div>
	)
}
export default Reviews