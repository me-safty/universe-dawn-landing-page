import { ArwesThemeProvider, StylesBaseline } from "@arwes/core"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import LandingBox from "../components/LandingBox"
import React from "react"
import icon1 from "../assets/landing/icon-battle.png"
import img1 from "../assets/landing/commandship.jpg"

export default {
	component: LandingBox,
	title: "LandingBox"
} as ComponentMeta<typeof LandingBox>

const Template: ComponentStory<typeof LandingBox> = (args) => (
	<ArwesThemeProvider>
		<StylesBaseline/>
		<LandingBox { ...args }/>
	</ArwesThemeProvider>
)

export const Primary = Template.bind({})
Primary.args = {
	data: {
		heading: "WARLORD",
		icon: icon1,
		img: img1,
		paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
	}
}