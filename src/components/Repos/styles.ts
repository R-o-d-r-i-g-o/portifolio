'use client'

import styled from "styled-components";
import { Card, Title, HiperLink } from '../CardGrid/styles';

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin: 10px 0 40px;
`;

const RepoCard = styled(Card)`
  min-width: 80%;
  margin: 0 auto;
  display: block;
  padding: 20px;
  height: fit-content;
`;

const Name = styled(Title)`
  margin: 5px 10px;
`;

const Link = styled(HiperLink)`
  margin: 0;
`;

export { Container, RepoCard, Name, Link };