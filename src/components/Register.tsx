import { FrameHexagon, Text } from "@arwes/core"
import React from "react"
const Register = (): JSX.Element => {
	return (
		<div className="register">
			<div className="container">
				<Text as="p" className="text">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Minus illo tempora minima dolorum unde accusamus
					repellendus, saepe voluptates quam consequatur. Quos quaerat
					doloribus atque ad earum voluptatibus molestiae
					reprehenderit harum. Lorem ipsum dolor, sit amet consectetur
					adipisicing elit. Minus illo tempora minima dolorum unde
					accusamus repellendus, saepe voluptates quam consequatur.
				</Text>
				<FrameHexagon
					animator={ {
						// eslint-disable-next-line @typescript-eslint/naming-convention
						animate: false
					} }
					hover
					palette="secondary"
					squareSize={ 10 }
					style={ {
						cursor: "pointer"
					} }
				>
					<div className="hexagon">
						<Text as="p">{"Register now".toUpperCase()}</Text>
					</div>
				</FrameHexagon>
			</div>
		</div>
	)
}
export default Register