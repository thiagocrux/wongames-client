import { Meta, StoryObj } from '@storybook/react'

import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {
    username: {
      type: 'string',
      description: 'The user name'
    }
  }
} as Meta

type Story = StoryObj<MenuProps>

export const Default: Story = (args: MenuProps) => <Menu {...args} />

Default.args = {
  username: 'Fulano Detail'
}

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
