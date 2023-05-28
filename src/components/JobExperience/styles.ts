"use client"

import styled from 'styled-components';
import { SubTitle, Description } from '../Presentation/styles';

const Container = styled.div``;

const Title = styled(SubTitle)`
  margin-top: 30px;
`;

const BodyText = styled(Description)`
  margin: 0;
`;

export { Container, Title, BodyText };