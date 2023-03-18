import styled from 'styled-components';

export const Caption = styled.p`
  padding: 5px;
  font-size: 12px;
  text-align: center;
  color: darkblue;
  position: absolute;
  top: 0;
  width: 100%;
  background-color: rgba(128, 128, 128, 0.6);
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const VideoStyled = styled.video`
  & img {
    object-fit: cover;
  }
`;
