import { ArwesThemeProvider, StylesBaseline } from "@arwes/core"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import FeatureBox from "../components/FeatureBox"
import React from "react"
import img1 from "../assets/landing/commandship.jpg"

export default {
	component: FeatureBox,
	title: "FeaturesBox",
} as ComponentMeta<typeof FeatureBox>

const Template: ComponentStory<typeof FeatureBox> = (args) => (
	<ArwesThemeProvider>
		<StylesBaseline
			styles={{
				body: {
					fontFamily: "Open Sans",
				},
			}}
		/>
		<FeatureBox {...args} />
	</ArwesThemeProvider>
)

export const Available = Template.bind({})
Available.args = {
	data: {
		isAvailability: true,
		heading: "3 profession",
		img: img1,
		paragraph:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam.",
	},
}

export const NotAvilable = Template.bind({})
NotAvilable.args = {
	data: {
		isAvailability: false,
		heading: "3 profession",
		img: img1,
		paragraph:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam.",
	},
}
