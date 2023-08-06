import React from 'react'
import styled from 'styled-components'

const Video = styled.video.attrs({
  autoPlay: true,
  muted: true,
  loop: true
})`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
`

export { Video }
