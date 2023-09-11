import { FramePentagon, Text } from "@arwes/core"
import React, { FC } from "react"
import grid from "../grid.module.css"
import style from "../index.module.css"
export interface IProps {
	data: {
		img: string
		name: string
		points: number
		type: string
	}
}
const TopPlayerCard: FC<IProps> = ({
	data
}): JSX.Element => {
	return (
		<div className={ style.TopPlayerCardBox }>
			<FramePentagon
				animator={ {
					// eslint-disable-next-line @typescript-eslint/naming-convention
					animate: false
				} }
				squareSize={ 30 }
			>
				<div className={ style.TopPlayerCard }>
					<div className={ grid.row }>
						<div className={ `${grid.col} ${grid.col_2}` }>
							<img alt="img" src={ data.img }/>
						</div>
						<div
							className={ `${style.info} ${grid.col} ${grid.col_4} ${grid.column}` }
						>
							<Text as="p" className={ style.name }>
								{data.name}
							</Text>
							<Text as="p" className={ style.type }>
								{ data.type }
							</Text>
						</div>
						<div
							className={ `${style.info_stats} ${grid.col} ${grid.col_6}` }
						>
							<Text as="p" className={ style.stats_p }>
								TORAL POINTS:
								<span className={ style.span }>
									{data.points.toLocaleString()}
								</span>
							</Text>
						</div>
					</div>
				</div>
			</FramePentagon>
		</div>
	)
}
export default TopPlayerCard