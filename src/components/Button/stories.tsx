import { Meta, StoryObj } from '@storybook/react'
import { AddShoppingCart } from 'styled-icons/material-outlined'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
      description: 'The heading content'
    },
    size: {
      type: 'string',
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The button size'
    },
    $fullWidth: {
      type: 'boolean',
      description: 'The button has full width?'
    },
    icon: {
      type: 'symbol',
      description: 'The button icon as a JSX element'
    }
  }
} as Meta

type Story = StoryObj<ButtonProps>

export const Default: Story = {
  args: {
    children: 'Lorem Ipsum',
    size: 'medium',
    $fullWidth: false
  }
}

export const WithIcon: Story = {
  args: {
    children: 'Lorem Ipsum',
    size: 'small',
    $fullWidth: false,
    icon: <AddShoppingCart />
  }
}
