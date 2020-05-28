import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { H1, H2, H3, H4, H5, H6, Paragraph } from '../src';

storiesOf('Typography', module)
  .add('Headers', () => {
    return (
      <>
        <H1 color="#FFF">{text('H1', 'Header 1')}</H1>
        <H2 color="#FFF">{text('H2', 'Header 2')}</H2>
        <H3 color="#FFF">{text('H3', 'Header 3')}</H3>
        <H4 color="#FFF">{text('H4', 'Header 4')}</H4>
        <H5 color="#FFF">{text('H5', 'Header 5')}</H5>
        <H6 color="#FFF">{text('H6', 'Header 6')}</H6>
      </>
    );
  })
  .add('Paragraph', () => (
    <Paragraph color="#FFF">
      {text('Paragraph', 'This is a paragraph')}
    </Paragraph>
  ));
