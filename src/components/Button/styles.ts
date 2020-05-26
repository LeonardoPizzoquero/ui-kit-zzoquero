import styled from 'styled-components';
import { shade } from 'polished';

export const ButtonComponent = styled.button`
  padding: 20px 30px;
  max-width: 100%;
  text-align: center;
  color: #fff;
  background: #bf2026;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#bf2026')};
  }
`;
