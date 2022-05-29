import React from 'react'
import { ButtonNative, ButtonNativeProps } from './Button'

// export const ButtonNativeStories = {
//   title: 'native/ButtonNative',
//   compoent: ButtonNative,
// }

// const Template = (args: ButtonProps) => <ButtonNative {...args} />

// export const PrimaryA = Template.bind({})
// PrimaryA.args = {
//   color: 'blue',
//   title: 'Primary Args',
// }

// export const LongPrimaryA = Template.bind({})
// LongPrimaryA.args = {
//   ...PrimaryA.args,
//   title: 'Long Primary Args',
// }

// export const SecondaryA = Template.bind({})
// SecondaryA.args = {
//   color: 'red',
//   title: 'Secondary Args',
// }

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'native/ButtonNative',
  component: ButtonNative,
} as ComponentMeta<typeof ButtonNative>

const Template: ComponentStory<typeof ButtonNative> = (args) => <ButtonNative {...args} />
const defaultArgs: ButtonNativeProps = {
  color: 'red',
  title: 'button-native',
  age: 12,
}

export const Default = Template.bind({})
Default.storyName = 'ButtonNative'
Default.args = defaultArgs
