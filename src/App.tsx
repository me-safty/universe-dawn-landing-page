import { ArwesThemeProvider, StylesBaseline } from "@arwes/core"
import FAQ from "./components/FAQ"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Landing from "./components/Landing"
import React, { FC } from "react"
import Register from "./components/Register"
import Reviews from "./components/Reviews"
import Stats from "./components/Stats"
import TopPlayers from "./components/TopPlayers"
const App: FC = () => {
	return (
		<>
			<ArwesThemeProvider>
				<StylesBaseline
					styles={ {
						body: {
							fontFamily: "Open Sans"
						}
					} }
				/>
				<Landing/>
				<Register/>
				<Stats/>
				<Gallery/>
				<Features/>
				<TopPlayers/>
				<FAQ/>
				<Reviews/>
				<Footer/>
			</ArwesThemeProvider>
		</>
	)
}
export default App