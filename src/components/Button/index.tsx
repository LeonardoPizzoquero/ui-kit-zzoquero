import React from 'react';

import { ButtonComponent  } from './styles';

const Button: React.FC = ({ children }) => {
  return (
    <ButtonComponent>
      {children}
    </ButtonComponent>
  );
};

export { Button };
