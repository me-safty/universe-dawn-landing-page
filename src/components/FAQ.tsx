import { Text } from "@arwes/core"
import { nanoid } from "nanoid"
import FAQCard from "./FAQCard"
import React, { useState } from "react"
import img from "../assets/spaceship-.png"
const FAQ = (): JSX.Element => {
	interface IData {
		answer: string
		id: number
		isShow: boolean
		qustion: string
	}
	const dataArr: IData[] = [
		{
			answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibu modi quisquam similique consectetur distinctio velit soluta cupiditate nam id? Itaque hic pariatur labore eius aliquam vero possimus quae doloribus consequatur.",
			id: 0,
			isShow: false,
			qustion: "who let the dog's out"
		},
		{
			answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibu modi quisquam similique consectetur distinctio velit soluta cupiditate nam id? Itaque hic pariatur labore eius aliquam vero possimus quae doloribus consequatur.",
			id: 1,
			isShow: false,
			qustion: "who let the dog's out"
		},
		{
			answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibu modi quisquam similique consectetur distinctio velit soluta cupiditate nam id? Itaque hic pariatur labore eius aliquam vero possimus quae doloribus consequatur.",
			id: 2,
			isShow: false,
			qustion: "who let the dog's out"
		},
		{
			answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibu modi quisquam similique consectetur distinctio velit soluta cupiditate nam id? Itaque hic pariatur labore eius aliquam vero possimus quae doloribus consequatur.",
			id: 3,
			isShow: false,
			qustion: "who let the dog's out"
		}
	]
	const [data, setData] = useState<IData[]>(dataArr)
	const handleClick = (id: number): void => {
		setData((p) =>
			p.map((e) =>
				e.id === id
					? {
						...e,
						isShow: !e.isShow
					}
					: {
						...e,
						isShow: false
					}))
	}
	return (
		<div className="FAQ section">
			<div className="container">
				<Text as="h1" className="main-heading">
					FAQ
				</Text>
				<div className="row">
					<div className="col col-lg-6">
						<img alt="img" src={ img }/>
					</div>
					<div className="col col-lg-6">
						<div className="row qust-box">
							{data.map((e, i) => (
								<div
									className="col qustionCard col-12"
									key={ nanoid() }
									onClick={ (): void => handleClick(i) }
								>
									<FAQCard data={ e }/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default FAQ