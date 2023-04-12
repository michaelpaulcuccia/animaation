import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeAnimation = () =>
  css`
    ${fadeIn} 2s ease-out infinite;
`;

const slideRight = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(50vw);
    }
`;

const slideAnimation = () =>
  css`
    ${slideRight} 1s linear infinite;
`;

const Root = styled.div`
    height: 300px;
    width: 300px;
    border-radius: 50%;
    background: radial-gradient(circle closest-side, #56ab2f, #a8e063);
    animation: ${props => {
        if (props.animationChoice === 'fade') {
            return fadeAnimation;
        } else if (props.animationChoice === 'slide') {
            return slideAnimation;
        }
    }};
`;

export default function Ball({animationChoice}) {
  return (
    <Root animationChoice={animationChoice}></Root>
  )
}
