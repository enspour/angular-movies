import { provideRouter } from '@angular/router';
import {
  applicationConfig,
  componentWrapperDecorator,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { MovieCardComponent } from './movie-card.component';

import { MOCKED_MOVIE } from './movie-card.mock-data';

type StoryType = MovieCardComponent;

const meta: Meta<StoryType> = {
  title: 'UI/Movie Card',
  component: MovieCardComponent,
  tags: ['autodocs'],
  argTypes: {
    movie: { control: 'object' },
    isGlow: { control: 'boolean' },
  },
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
    componentWrapperDecorator(
      (story) => `<div style="width: 260px">${story}</div>`,
    ),
  ],
};

export default meta;

type Story = StoryObj<StoryType>;

export const Default: Story = {
  args: {
    movie: MOCKED_MOVIE,
    isGlow: false,
  },
};

export const Glowing: Story = {
  args: {
    movie: MOCKED_MOVIE,
    isGlow: true,
  },
};
