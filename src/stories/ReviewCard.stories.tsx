import { ArwesThemeProvider, StylesBaseline } from "@arwes/core"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import ReviewCard from "../components/ReviewCard"
import img1 from "../assets/landing/commandship.jpg"

export default {
	component: ReviewCard,
	title: "ReviewCard"
} as ComponentMeta<typeof ReviewCard>

const Template: ComponentStory<typeof ReviewCard> = (args) => (
	<ArwesThemeProvider>
		<StylesBaseline
			styles={ {
				body: {
					fontFamily: "Open Sans"
				}
			} }
		/>
		<ReviewCard { ...args }/>
	</ArwesThemeProvider>
)

export const Primary = Template.bind({})
Primary.args = {
	data: {
		dis: "Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet",
		heading: "Lorem, ipsum.",
		img: img1,
		name: "InsOp",
		type: "Warlord"
	}
}