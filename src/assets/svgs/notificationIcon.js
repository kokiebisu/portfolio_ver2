import React from "react"
import styled from "styled-components"

export const Greetings = props => {
  return (
    <Wrapper {...props}>
      <svg viewBox="0 0 511.923 511.923">
        <g>
          <path d="m78.961 300.923c.309 0 .595-.086.903-.092l38.562 121.092h-9.465c-24.853 0-45 20.147-45 45v30c0 8.284 6.716 15 15 15h240c8.284 0 15-6.716 15-15v-15c0-33.137-26.863-60-60-60h-60v-15c0-8.291-6.709-15-15-15s-15 6.709-15 15v15h-34.098l-42.001-131.798c9.76-8.262 16.099-20.444 16.099-34.202 0-7.657-2.102-14.764-5.49-21.083l90.029-90.029-21.215-21.207-90.851 90.851c-5.376-2.274-11.279-3.532-17.474-3.532-24.814 0-45 19.186-45 44s20.187 46 45.001 46z" />
          <path d="m261.54 240.278 21.211 21.211c5.859 5.859 15.352 5.859 21.211 0l148.491-148.491c5.859-5.859 5.859-15.352 0-21.211l-21.211-21.211c-29.224-29.224-76.816-29.253-106.069 0l-63.633 63.633c-29.239 29.238-29.239 76.831 0 106.069z" />
          <path d="m441.847 250.884c5.859-5.859 5.859-15.352 0-21.211l-21.211-21.211c-5.859-5.859-15.352-5.859-21.211 0s-5.859 15.352 0 21.211l21.211 21.211c5.86 5.859 15.352 5.859 21.211 0z" />
          <path d="m426.961 186.923c0 8.291 6.709 15 15 15h21c8.291 0 15-6.709 15-15s-6.709-15-15-15h-21c-8.291 0-15 6.709-15 15z" />
          <path d="m377.961 286.923c8.291 0 15-6.709 15-15v-21c0-8.291-6.709-15-15-15s-15 6.709-15 15v21c0 8.291 6.709 15 15 15z" />
          <path d="m230.791 124.68c2.988-4.001 5.905-8.049 9.538-11.682l63.633-63.633c3.602-3.602 7.639-6.57 11.647-9.571l-22.253-22.26c-23.394-23.379-61.436-23.379-84.858 0-23.379 23.394-23.379 61.465 0 84.858z" />
        </g>
      </svg>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
`