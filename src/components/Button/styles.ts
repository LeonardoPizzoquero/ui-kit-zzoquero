import styled from 'styled-components';
import { shade } from 'polished';

interface Props {
  color?: string;
  backgroundColor?: string;
  outlined?: boolean;
}

export const ButtonComponent = styled.button<Props>`
  padding: 20px 30px;
  max-width: 100%;
  text-align: center;
  color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props: Props) => shade(0.2, props.backgroundColor as string)};
  }
`;
