import { Figure, Text } from "@arwes/core"
import Carousel from "react-spring-3d-carousel"
import React from "react"
import img from "../assets/stats/Gruppe 183.png"
const Gallery = (): JSX.Element => {
	const ArrEleNums: number = 10
	const items: number[] = [...Array(ArrEleNums).keys()]
	const slides = items.map((e) => ({
		content: (
			<Figure alt="A nebula" src={ img }> . </Figure>
		),
		key: e
	}))
	return (
		<div className="gallery section">
			<div className="container">
				<Text as="h1" className="main-heading">
					GALLERY
				</Text>
				<Carousel offsetRadius={ 3 } showNavigation slides={ slides }/>
				<div className="text">
					<Text as="p" className="p">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Vero molestiae culpa voluptatum voluptate unde
						reiciendis aliquid quia, incidunt optio sint libero
						sapiente mollitia dicta accusantium ratione doloremque
						facere et. incidunt optio sint libero sapiente mollitia
						dicta accusantium ratione doloremque facere et.
						Adipisci?
					</Text>
				</div>
			</div>
		</div>
	)
}
export default Gallery