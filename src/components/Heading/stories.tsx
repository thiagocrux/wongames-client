import { Meta, StoryObj } from '@storybook/react'

import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string',
      description: 'The heading content'
    },
    size: {
      type: 'string',
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the heading'
    },
    color: {
      type: 'string',
      control: 'select',
      options: ['white', 'black'],
      description: 'The text color'
    },
    $lineColor: {
      type: 'string',
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'The border color'
    },
    $lineLeft: {
      type: 'boolean',
      description: 'Has a line on the left of the heading?'
    },
    $lineBottom: {
      type: 'boolean',
      description: 'Has a line below the heading?'
    }
  }
} as Meta

type Story = StoryObj<HeadingProps>

export const Default: Story = {
  args: {
    children: 'Lorem Ipsum',
    size: 'medium',
    color: 'white',
    $lineColor: 'primary',
    $lineLeft: false,
    $lineBottom: false
  }
}
