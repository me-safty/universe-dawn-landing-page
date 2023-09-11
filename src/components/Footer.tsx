import { Text } from "@arwes/core"
import React from "react"
import img from "../assets/Wanna know more Follow us on.png"
import logo from "../assets/landing/UniverseDawn.png"
const Footer = (): JSX.Element => {
	return (
		<footer className="section">
			<div className="container">
				<div className="row">
					<div className="col col-xs-12 col-sm-12 col-lg-5 column">
						<img alt="" src={ logo }/>
						<img alt="" src={ img }/>
						<div className="icons col">
							<i className="fa fa-twitter"/>
							<i className="fa fa-twitter"/>
							<i className="fa fa-twitter"/>
							<i className="fa fa-twitter"/>
						</div>
					</div>
					<div className="col col-xs-12 col-sm-12 col-lg-3 column">
						<Text as="h1" className="title">
							headline
						</Text>
						<a href="#">Wiki</a>
						<a href="#">Discord</a>
						<a href="#">Kontakt</a>
						<a href="#">Email</a>
					</div>
					<div className="col col-xs-12 col-sm-12 col-lg-4 column">
						<Text as="h1" className="title">
							headline
						</Text>
						<a href="#">Team Parallax</a>
						<a href="#">Impressum</a>
						<a href="#">Datenschutz</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer