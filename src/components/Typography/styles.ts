import styled from 'styled-components';

interface Props {
  /**
   * Set custom color to the header title
   */
  color?: string;
  /**
   * Set font-size number (px)
   */
  size?: number;
}

export const H1 = styled.h1<Props>`
  color: ${(props: Props) => props.color};
  font-size: ${(props: Props) => (props.size ? `${props.size}px` : '2.5rem')};
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  font-family: inherit;
`;

export const H2 = styled.h2<Props>`
  color: ${(props: Props) => props.color};
  ${(props: Props) => (props.size ? `${props.size}px` : '2rem')};
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  font-family: inherit;
`;

export const H3 = styled.h3<Props>`
  color: ${(props: Props) => props.color};
  ${(props: Props) => (props.size ? `${props.size}px` : '1.75rem')};
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  font-family: inherit;
`;

export const H4 = styled.h4<Props>`
  color: ${(props: Props) => props.color};
  ${(props: Props) => (props.size ? `${props.size}px` : '1.5rem')};
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  font-family: inherit;
`;

export const H5 = styled.h5<Props>`
  color: ${(props: Props) => props.color};
  ${(props: Props) => (props.size ? `${props.size}px` : '1.25rem')};
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  font-family: inherit;
`;

export const H6 = styled.h6<Props>`
  color: ${(props: Props) => props.color};
  ${(props: Props) => (props.size ? `${props.size}px` : '1rem')};
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  font-family: inherit;
`;

export const Paragraph = styled.p<Props>`
  color: ${(props: Props) => props.color};
  ${(props: Props) => (props.size ? `${props.size}px` : '1rem')};
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: inherit;
`;
