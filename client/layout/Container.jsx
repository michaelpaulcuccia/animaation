import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 20px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
`;

const ComponentWrapper = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default ComponentWrapper;