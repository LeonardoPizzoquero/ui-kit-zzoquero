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
   * You can set duration of images transitions, by default 5s (5000ms)
   */
  duration?: number;
  /**
   * You can disable autoplay transitions, by default is active
   */
  autoPlay?: boolean;
  /**
   * Arrows to control previous and next images
   */
  controls?: boolean;
  /**
   * Bullets to navigate between images
   */
  bullets?: boolean;

  /**
   * Will recieve all img tags and include on carousel
   */
  children: JSX.Element[];
}

const Carousel: React.FC<Props> = ({
  duration = 5000,
  autoPlay = true,
  controls = true,
  bullets = true,
  children,
}) => {
  const getAllChildrenImages = useCallback(() => {
    const allImages = children
      .filter((image) => image.type === 'img')
      .map((image, index: number) => {
        return { id: index, url: image.props.src }
      });

      return allImages;
  }, [children]);

  const childrenImages = useMemo<Images>(getAllChildrenImages, [children]);

  const [images, setImages] = useState<Images>(childrenImages);

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
    if (autoPlay) {
      const timer = setTimeout(nextImage, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, nextImage]);

  return (
    <Container>
      {controls && (
        <>
          <ArrowLeft onClick={prevImage}>
            <FiChevronLeft size={40} color="#ddd" />
          </ArrowLeft>
          <ArrowRight onClick={nextImage}>
            <FiChevronRight size={40} color="#ddd" />
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
                    active={currentImage=== index}
                  />
                );
              })}
          </div>
        </Bullets>
      )}
    </Container>
  );
};

export { Carousel };
