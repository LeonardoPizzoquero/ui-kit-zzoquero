import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import {
  Container,
  ArrowLeft,
  ArrowRight,
  Image,
  Bullets,
  Bullet,
} from './styles';

interface Obj {
  id: number;
  url: string;
}

type Images = Obj[];

interface Props {
  /**
   * Pass an array with your favorite images, don't forget to pass an valid URL
   */
  imageList: Obj[];
  /**
   * You can set duration of images transitions, by default 5s (5000ms)
   */
  duration?: number;
  /**
   * Arrows to control previous and next images
   */
  controls?: boolean;
  /**
   * Bullets to navigate between images
   */
  bullets?: boolean;
}

const Slider: React.FC<Props> = ({
  imageList,
  duration = 5000,
  controls = true,
  bullets = true,
}) => {
  const [images, setImages] = useState<Images>(imageList);

  const isEmpty = useMemo(() => images.length > 0, [images]);
  const imageListLength = useMemo(() => images.length - 1, [images]);

  const [currentImage, setCurrentImage] = useState(imageListLength);

  const nextImage = useCallback(() => {
    if (currentImage >= imageListLength) setCurrentImage(0);
    else setCurrentImage(currentImage + 1);
  }, [currentImage, imageListLength]);

  const prevImage = useCallback(() => {
    if (currentImage <= 0) setCurrentImage(imageListLength);
    else setCurrentImage(currentImage - 1);
  }, [currentImage, imageListLength]);

  const handleSetImage = useCallback((index) => {
    setCurrentImage(index);
  }, []);

  useEffect(() => {
    const timer = setTimeout(nextImage, duration);

    return () => clearTimeout(timer);
  }, [duration, nextImage]);

  return (
    <Container>
      {controls && (
        <>
          <ArrowLeft onClick={prevImage}>
            <FiChevronLeft size={100} color="#ddd" />
          </ArrowLeft>
          <ArrowRight onClick={nextImage}>
            <FiChevronRight size={100} color="#ddd" />
          </ArrowRight>
        </>
      )}

      {isEmpty &&
        images.map((image, index) => {
          return (
            <Image
              current={currentImage === index}
              index={index}
              key={image.id}
              src={image.url}
              alt={image.url}
            />
          );
        })}

      {bullets && (
        <Bullets>
          <div>
            {isEmpty &&
              images.map((image, index) => {
                return (
                  <Bullet
                    onClick={() => handleSetImage(index)}
                    key={image.id}
                  />
                );
              })}
          </div>
        </Bullets>
      )}
    </Container>
  );
};

export { Slider };
