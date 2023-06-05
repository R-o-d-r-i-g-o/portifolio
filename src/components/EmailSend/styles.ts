import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
`;

const Line = styled.hr`
  box-shadow: 20px 20px 50px rgba(255, 255, 255, .3);
  color: ${({ theme }) => theme.textColor};
  
`;

export { Container, Line };
