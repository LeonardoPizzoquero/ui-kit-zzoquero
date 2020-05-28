import { configure, addParameters, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from "@storybook/addon-knobs";

import theme from './theme';

import './reset.css';

addParameters({
  options: {
    theme,
  },
});

addDecorator(withKnobs);
addDecorator(centered);

configure(require.context('../stories', true, /\.stories\.tsx$/), module);
