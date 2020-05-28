import React from 'react';
import { storiesOf } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/dist/blocks';
import { Carousel } from '../src';

storiesOf('Carousel', module)
  .addParameters({
    docs: {
      container: DocsContainer,
      page: DocsPage,
    },
  })
  .add('Default', () => {
    return (
      <div style={{ width: '1200px', height: '720px' }}>
        <Carousel>
          <img src="https://dummyimage.com/1920x1080/BE1C1C/fff.jpg" alt="" />
          <img src="https://dummyimage.com/1920x1080/1C98BE/fff.jpg" alt="" />
          <img src="https://dummyimage.com/1920x1080/27BE1C/fff.jpg" alt="" />
        </Carousel>
      </div>
    );
  })
  .add('No arrows', () => {
    return (
      <div style={{ width: '1200px', height: '720px' }}>
        <Carousel controls={false}>
          <img src="https://dummyimage.com/1920x1080/BE1C1C/fff.jpg" alt="" />
          <img src="https://dummyimage.com/1920x1080/1C98BE/fff.jpg" alt="" />
          <img src="https://dummyimage.com/1920x1080/27BE1C/fff.jpg" alt="" />
        </Carousel>
      </div>
    );
  })
  .add('No bullets', () => {
    return (
      <div style={{ width: '1200px', height: '720px' }}>
        <Carousel bullets={false}>
          <img src="https://dummyimage.com/1920x1080/BE1C1C/fff.jpg" alt="" />
          <img src="https://dummyimage.com/1920x1080/1C98BE/fff.jpg" alt="" />
          <img src="https://dummyimage.com/1920x1080/27BE1C/fff.jpg" alt="" />
        </Carousel>
      </div>
    );
  })
  .add('Without all Controls', () => {
    return (
      <div style={{ width: '1200px', height: '720px' }}>
        <Carousel controls={false} bullets={false}>
          <img src="https://dummyimage.com/1920x1080/BE1C1C/fff.jpg" alt="" />
          <img src="https://dummyimage.com/1920x1080/1C98BE/fff.jpg" alt="" />
          <img src="https://dummyimage.com/1920x1080/27BE1C/fff.jpg" alt="" />
        </Carousel>
      </div>
    );
  })
  .add('Set duration', () => {
    return (
      <div style={{ width: '1200px', height: '720px' }}>
        <Carousel duration={2000}>
          <img src="https://dummyimage.com/1920x1080/BE1C1C/fff.jpg" alt="" />
          <img src="https://dummyimage.com/1920x1080/1C98BE/fff.jpg" alt="" />
          <img src="https://dummyimage.com/1920x1080/27BE1C/fff.jpg" alt="" />
        </Carousel>
      </div>
    );
  })
  .add('Disabled AutoPlay', () => {
    return (
      <div style={{ width: '1200px', height: '720px' }}>
        <Carousel autoPlay={false}>
          <img src="https://dummyimage.com/1920x1080/BE1C1C/fff.jpg" alt="" />
          <img src="https://dummyimage.com/1920x1080/1C98BE/fff.jpg" alt="" />
          <img src="https://dummyimage.com/1920x1080/27BE1C/fff.jpg" alt="" />
        </Carousel>
      </div>
    );
  });
