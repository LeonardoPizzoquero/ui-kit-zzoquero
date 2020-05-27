import React from 'react';
import { ButtonComponent  } from './styles';

interface Props {
  color?: string;
  backgroundColor?: string;
  outlined?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
    children,
    color = '#fff',
    backgroundColor = '#bf2026',
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
