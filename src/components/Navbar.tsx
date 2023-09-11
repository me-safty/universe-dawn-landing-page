import { FrameHexagon, Text } from "@arwes/core"
import { nanoid } from "nanoid"
import React from "react"
interface IProps {
	classNameHeader?: string
}
const Navbar = ({
	classNameHeader
}: IProps): JSX.Element => {
	const navElements: string[] = ["login", "login", "login", "login"]
	return (
		<nav className={ classNameHeader ?? "" }>
			<div className="row">
				{navElements.map((e) => (
					<div
						className="hexagon-box col col-xs-12 col-sm-12 col-md-3 col-lg-3"
						key={ nanoid() }
					>
						<FrameHexagon
							animator={ {
								// eslint-disable-next-line @typescript-eslint/naming-convention
								animate: false
							} }
							hover
							squareSize={ 10 }
							style={ {
								cursor: "pointer"
							} }
						>
							<div className="hexagon">
								<Text as="p">{e.toUpperCase()}</Text>
							</div>
						</FrameHexagon>
					</div>
				))}
			</div>
		</nav>
	)
}
export default Navbar