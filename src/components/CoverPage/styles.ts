import Lottie from 'react-lottie'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 20%;
  height: 93vh;
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Animation = styled(Lottie as any)`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export { Container, Animation }
