import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@rani-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/RanielliMontagna.png',
    alt: 'Ranielli Montagna',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
}
