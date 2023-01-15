import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <MianHeader>
      <h1>my Starter Boilerplate</h1>
    </MianHeader>
  );
};

const MianHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme?.colors.bg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default About;
