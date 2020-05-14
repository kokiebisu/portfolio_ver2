import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

// Sizes
import { sizes, landing } from './size';

export const Container = styled.div`
  position: relative;
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  width: auto;
  height: 100%;

  @media ${landing.sm} {
    max-width: ${sizes.xs}px;
  }

  @media ${landing.lg} {
    max-width: ${sizes.md}px;
  }

  @media ${landing.xxl} {
    max-width: ${sizes.xl}px;
  }

  @media ${landing['4xl']} {
    max-width: ${sizes['3xl']}px;
  }

  @media ${landing['6xl']} {
    max-width: ${sizes['5xl']}px;
  }

  ${({ fluid }) =>
    fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}

  ${({ noHeight }) =>
    noHeight &&
    css`
      height: 0;
    `}
`;

export const Flex = styled(motion.div)`
    position: relative;
    display: flex;
    align-items: center;

    ${({ spaceBetween }) =>
      spaceBetween &&
      css`
        justify-content: space-between;
      `}

    ${({ flexEnd }) =>
      flexEnd &&
      css`
        justify-content: flex-end;
      `}

    /* ${({ alignTop }) =>
      alignTop &&
      css`
        align-items: top;
      `} */

    ${({ noHeight }) =>
      noHeight &&
      css`
        height: 0;
      `}

    ${({ width }) =>
      width &&
      css`
        width: 100%;
      `}
`;
