"use client"

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap
`;

const Item = styled.div`
  height: 6rem;
  width: 6rem;
`;

export { Container, Item };