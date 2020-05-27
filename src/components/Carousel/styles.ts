import styled from 'styled-components';

interface ImageProps {
  index: number;
  current: boolean;
}

interface BulletProps {
  active: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  position: relative;
`;

export const Image = styled.img<ImageProps>`
  position: absolute;
  z-index: ${(props) => props.index};
  transition: opacity 0.3s;
  opacity: ${(props) => (props.current ? '1' : '0')};
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ArrowLeft = styled.button`
  position: absolute;
  z-index: 100;
  left: 0;
  height: 100%;
  width: 130px;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowRight = styled.button`
  position: absolute;
  z-index: 100;
  right: 0%;
  height: 100%;
  width: 130px;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Bullets = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  position: absolute;
  z-index: 100;
  bottom: 40px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20vh;
    margin: 0 auto;
  }
`;

export const Bullet = styled.button<BulletProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ddd;
  background: ${(props) => props.active ? 'rgba(0, 0, 0, 0.6)' : 'transparent'};


  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;
