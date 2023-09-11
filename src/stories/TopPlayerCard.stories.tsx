import { ArwesThemeProvider, StylesBaseline } from "@arwes/core"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import TopPlayerCard from "../components/TopPlayerCard"
import img1 from "../assets/landing/commandship.jpg"

export default {
	component: TopPlayerCard,
	title: "TopPlayerCard"
} as ComponentMeta<typeof TopPlayerCard>

const Template: ComponentStory<typeof TopPlayerCard> = (args) => (
	<ArwesThemeProvider>
		<StylesBaseline
			styles={ {
				body: {
					fontFamily: "Open Sans"
				}
			} }
		/>
		<TopPlayerCard { ...args }/>
	</ArwesThemeProvider>
)

export const Primary = Template.bind({})
Primary.args = {
	data: {
		img: img1,
		name: "Ins Op",
		points: 291207,
		type: "Warlord"
	}
}