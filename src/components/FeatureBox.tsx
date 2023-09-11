import { FrameCorners, Text } from "@arwes/core"
import React, { FC } from "react"
import grid from "../grid.module.css"
import style from "../index.module.css"
export interface IProps {
	data: {
		heading: string
		img: string
		isAvailability: boolean
		paragraph: string
	}
}
const FeatureBox: FC<IProps> = ({
	data
}): JSX.Element => {
	return (
		<div className={ style.FeatureBox }>
			<div className={ style.img }>
				<img alt="img" src={ data.img }/>
			</div>
			<div className={ `${style.text} ${grid.col} ${grid.column}` }>
				<Text as="h5" className={ style.heading }>
					{ data.heading }
				</Text>
				<Text as="p" className={ style.paragraph }>
					{ data.paragraph }
				</Text>
			</div>
			{!data.isAvailability && (
				<FrameCorners
					animator={ {
						// eslint-disable-next-line @typescript-eslint/naming-convention
						animate: false
					} }
					palette="secondary"
				>
					<Text as="p" className={ style.comingP }>
						coming soon!
					</Text>
				</FrameCorners>
			)}
		</div>
	)
}
export default FeatureBox