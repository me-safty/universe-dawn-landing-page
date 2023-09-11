import { FrameHexagon, Text } from "@arwes/core"
import React, { FC } from "react"
import grid from "../grid.module.css"
import style from "../index.module.css"
export interface IProps {
	data: {
		answer: string
		isShow: boolean
		qustion: string
	}
}
const FAQCard: FC<IProps> = ({
	data
}): JSX.Element => {
	return (
		<FrameHexagon
			animator={ {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				animate: data.isShow
			} }
			squareSize={ 13 }
		>
			<div className={ `${style.FAQCard} ${data.isShow
				? style.active
				: ""}` }
			>
				<div className={ `${style.qustionBox} ${grid.col}` }>
					<Text as="p" className={ style.qustion }>
						{ data.qustion }
					</Text>
					<svg
						style={ {
							transform: !data.isShow
								? "rotate(0deg)"
								: "rotate(90deg)"
						} }
						viewBox="-8 -7 8 13" xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M 0 0 L -7 -7 L -8 -6 L -2 0 L -2 0 L -8 5 L -7 6" fill="#01c6c5"/>
					</svg>
				</div>
				{data.isShow && (
					<Text as="p" className={ style.dis }>
						{ data.answer }
					</Text>
				)}
			</div>
		</FrameHexagon>
	)
}
export default FAQCard