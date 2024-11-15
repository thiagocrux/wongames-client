import { Meta, StoryObj } from '@storybook/react'

import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color: {
      type: 'string',
      control: 'select',
      options: ['white', 'black'],
      description: 'The logo text color'
    },
    size: {
      type: 'string',
      control: 'select',
      options: ['normal', 'large'],
      description: 'The logo size'
    },
    $hideOnMobile: {
      type: 'boolean',
      description: 'Should hide the logo text?'
    }
  }
} as Meta

type Story = StoryObj<LogoProps>

export const Default: Story = {
  args: {
    color: 'white',
    size: 'normal',
    $hideOnMobile: false
  }
}
