import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/dist/blocks';

import { Button } from '../src';

storiesOf('Button', module)
  .addParameters({
    docs: {
      container: DocsContainer,
      page: DocsPage,
    },
  })
  .add('Default', () => <Button>{text('Content', 'Hover Me')}</Button>)
  .add('Outlined', () => (
    <Button outlined={boolean('Outlined', true)}>
      {text('Content', 'Hover Me')}
    </Button>
  ))
  .add('Disabled', () => (
    <Button disabled={boolean('Disabled', true)}>
      {text('Content', 'Hover Me')}
    </Button>
  ))
  .add('Text Color', () => (
    <Button color={text('Color', 'yellow')}>
      {text('Content', 'Hover Me')}
    </Button>
  ))
  .add('Background Color', () => (
    <Button backgroundColor={text('Color', 'blue')}>
      {text('Content', 'Hover Me')}
    </Button>
  ))
  .add('Empty Button', () => <Button />);
