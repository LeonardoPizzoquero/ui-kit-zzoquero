import React from 'react';
import { storiesOf } from '@storybook/react';

import { Slider } from '../src';

storiesOf('Slider', module)
  .add('Default', () => {
    const images = [
      { id: 1, url: 'https://dummyimage.com/1920x1080/BE1C1C/fff.jpg' },
      { id: 2, url: 'https://dummyimage.com/1920x1080/1C98BE/fff.jpg' },
      { id: 3, url: 'https://dummyimage.com/1920x1080/27BE1C/fff.jpg' },
      { id: 4, url: 'https://dummyimage.com/1920x1080/670B7E/fff.jpg' },
    ]

    return <div style={{ width: '1200px', height: '720px' }}><Slider imageList={images} /></div>
  })
  .add('No arrows', () => {
    const images = [
      { id: 1, url: 'https://dummyimage.com/1920x1080/BE1C1C/fff.jpg' },
      { id: 2, url: 'https://dummyimage.com/1920x1080/1C98BE/fff.jpg' },
      { id: 3, url: 'https://dummyimage.com/1920x1080/27BE1C/fff.jpg' },
      { id: 4, url: 'https://dummyimage.com/1920x1080/670B7E/fff.jpg' },
    ]

    return <div style={{ width: '1200px', height: '720px' }}><Slider controls={false} imageList={images} /></div>
  })
  .add('No bullets', () => {
    const images = [
      { id: 1, url: 'https://dummyimage.com/1920x1080/BE1C1C/fff.jpg' },
      { id: 2, url: 'https://dummyimage.com/1920x1080/1C98BE/fff.jpg' },
      { id: 3, url: 'https://dummyimage.com/1920x1080/27BE1C/fff.jpg' },
      { id: 4, url: 'https://dummyimage.com/1920x1080/670B7E/fff.jpg' },
    ]

    return <div style={{ width: '1200px', height: '720px' }}><Slider bullets={false} imageList={images} /></div>
  })
  .add('Without all Controls', () => {
    const images = [
      { id: 1, url: 'https://dummyimage.com/1920x1080/BE1C1C/fff.jpg' },
      { id: 2, url: 'https://dummyimage.com/1920x1080/1C98BE/fff.jpg' },
      { id: 3, url: 'https://dummyimage.com/1920x1080/27BE1C/fff.jpg' },
      { id: 4, url: 'https://dummyimage.com/1920x1080/670B7E/fff.jpg' },
    ]

    return <div style={{ width: '1200px', height: '720px' }}><Slider controls={false} bullets={false} imageList={images} /></div>
  })
  .add('Set duration', () => {
    const images = [
      { id: 1, url: 'https://dummyimage.com/1920x1080/BE1C1C/fff.jpg' },
      { id: 2, url: 'https://dummyimage.com/1920x1080/1C98BE/fff.jpg' },
      { id: 3, url: 'https://dummyimage.com/1920x1080/27BE1C/fff.jpg' },
      { id: 4, url: 'https://dummyimage.com/1920x1080/670B7E/fff.jpg' },
    ]

    return <div style={{ width: '1200px', height: '720px' }}><Slider duration={1000} imageList={images} /></div>
  })

