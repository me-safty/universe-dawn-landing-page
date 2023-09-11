import { FramePentagon, Text } from "@arwes/core"
import React, { FC } from "react"
import grid from "../grid.module.css"
import style from "../index.module.css"
export interface IProps {
	data: {
		dis: string
		heading: string
		img: string
		name: string
		type: string
	}
}
const ReviewCard: FC<IProps> = ({
	data
}): JSX.Element => {
	return (
		<div className={ style.reviewCardBox }>
			<FramePentagon
				animator={ {
					// eslint-disable-next-line @typescript-eslint/naming-convention
					animate: false
				} }
				squareSize={ 40 }
			>
				<div className={ style.reviewCard }>
					<div className={ style.text }>
						<Text as="p" className={ style.headingP }>
							{data.heading}
						</Text>
						<Text as="p" className={ style.p }>
							{ data.dis }
						</Text>
					</div>
					<div className={ `${style.info} ${grid.row}` }>
						<div className={ grid.col }>
							<img alt="img" src={ data.img }/>
						</div>
						<div className={ `${grid.col} ${grid.column}` }>
							<Text as="p" className={ style.name }>
								{ data.name }
							</Text>
							<Text as="p" className={ style.type }>
								{ data.type }
							</Text>
						</div>
					</div>
				</div>
			</FramePentagon>
		</div>
	)
}
export default ReviewCard