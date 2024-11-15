import { Meta, StoryObj } from '@storybook/react'

import MediaMatch, { MediaMatchProps } from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

type Story = StoryObj<MediaMatchProps>

export const Desktop: Story = {
  render: () => (
    <MediaMatch $greaterThan="medium">Appears only on Desktop</MediaMatch>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}

export const Mobile: Story = {
  render: () => (
    <MediaMatch $lessThan="medium">Appears only on Desktop</MediaMatch>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
