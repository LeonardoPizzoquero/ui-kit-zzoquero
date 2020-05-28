import React from 'react';
import { ButtonComponent } from './styles';

interface Props {
  /**
   * Change text color inside button
   */
  color?: string;
  /**
   * Change Background Color
   */
  backgroundColor?: string;
  /**
   * Outline style for button
   */
  outlined?: boolean;
  /**
   * Disable style button
   */
  disabled?: boolean;
  /**
   * Pass a function for button
   */
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  children,
  color = '#fff',
  backgroundColor = '#e11e38',
  outlined = false,
  ...props
}) => {
  return (
    <ButtonComponent
      {...props}
      color={color}
      backgroundColor={backgroundColor}
      outlined={outlined}
    >
      {children}
    </ButtonComponent>
  );
};

export { Button };
