import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideRight = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(50vw);
    }
`;

const Root = styled.div`
    height: 300px;
    width: 300px;
    border-radius: 50%;
    background: radial-gradient(circle closest-side, #56ab2f, #a8e063);
    //animation: 2s ${fadeIn} ease-out infinite;
    //animation: ${slideRight} 1s linear infinite;
`;

export default function Ball() {
  return (
    <Root></Root>
  )
}
