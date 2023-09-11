import { Text } from "@arwes/core"
import React from "react"
import style from "../index.module.css"
export interface IProps {
	data: {
		heading: string
		icon: string
		img: string
		paragraph: string
	}
}
const LandingBox = ({
	data
}: IProps): JSX.Element => {
	return (
		<div className={ style.LandingBox }>
			<div className={ style.head }>
				<svg viewBox="-1 -1 212 212" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M 180 210 L 210 180 L 210 30 L 180 0 L 30 0 L 0 30 L 0 180 L 30 210 L 180 210"
						fill="none"
						stroke="#FFA76C"
						strokeWidth="2"
					/>
				</svg>
				<div className={ style.img }>
					<img
						alt="commandship"
						className={ style.img1 }
						src={ data.img }
					/>
				</div>
			</div>
			<div className={ style.body }>
				<svg viewBox="-1 -1 212 305" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M 180 300 L 210 270 L 210 0 L 180 30 L 30 30 L 0 0 L 0 270 L 30 300 L 180 300"
						fill="#01C6C533"
						stroke="#01C6C5"
						strokeWidth="2"
					/>
				</svg>
				<div className={ style.text }>
					<Text as="h1" className={ style.h }>
						{ data.heading }
					</Text>
					<Text as="p" className={ style.p }>
						{ data.paragraph }
					</Text>
				</div>
			</div>
			<div className={ style.badge }>
				<div className={ style.box }>
					<img alt="icon" src={ data.icon }/>
				</div>
			</div>
			<div className={ `${style.line} ${style.one}` }/>
			<div className={ `${style.line} ${style.two}` }/>
			<div className={ `${style.line} ${style.three}` }/>
			<div className={ `${style.line} ${style.four}` }/>
		</div>
	)
}
export default LandingBox