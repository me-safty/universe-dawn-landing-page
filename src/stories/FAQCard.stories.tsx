import { ArwesThemeProvider, StylesBaseline } from "@arwes/core"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import FAQCard from "../components/FAQCard"
import React from "react"

export default {
	component: FAQCard,
	title: "FAQCard ",
} as ComponentMeta<typeof FAQCard>

const Template: ComponentStory<typeof FAQCard> = (args) => (
	<ArwesThemeProvider>
		<StylesBaseline
			styles={{
				body: {
					fontFamily: "Open Sans",
				},
			}}
		/>
		<FAQCard {...args} />
	</ArwesThemeProvider>
)

export const Primary = Template.bind({})
Primary.args = {
	data: {
		answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibu modi quisquam similique consectetur distinctio velit soluta cupiditate nam id? Itaque hic pariatur labore eius aliquam vero possimus quae doloribus consequatur.",
		qustion: "who let the dog's out",
		isShow: false,
	},
}

export const QWithDescription = Template.bind({})
QWithDescription.args = {
	data: {
		answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibu modi quisquam similique consectetur distinctio velit soluta cupiditate nam id? Itaque hic pariatur labore eius aliquam vero possimus quae doloribus consequatur.",
		qustion: "who let the dog's out",
		isShow: true,
	},
}
