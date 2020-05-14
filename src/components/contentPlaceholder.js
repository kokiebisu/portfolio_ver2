import * as React from 'react';
import { motion } from 'framer-motion';
import { mix } from '@popmotion/popcorn';
import styled from 'styled-components';

const randomInt = (min, max) => Math.round(mix(min, max, Math.random()));
const generateParagraphLength = () => randomInt(5, 8);
const generateWordLength = () => randomInt(20, 100);

// Randomly generate some paragraphs of word lengths
const paragraphs = [...Array(3)].map(() => {
  return [...Array(generateParagraphLength())].map(generateWordLength);
});

export const Word = ({ width }) => <Words style={{ width }}>{width}</Words>;

const Paragraph = ({ words }) => (
  <WordWrapper>
    {words.map((width) => (
      <Word width={width} />
    ))}
  </WordWrapper>
);

export const ContentPlaceholder = ({ data }) => (
  <ContentPlaceholderWrapper
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}>
    <Paragraph words={data} />
  </ContentPlaceholderWrapper>
);

const Words = styled.div`
  position: relative;
  padding: 5px 10px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 8px;
  margin-right: 8px;
  background: ${({ theme }) => theme.tag};
  display: inline-block;
  color: ${({ theme }) => theme.background};
  font-family: SFProDisplay-Light;
`;

const WordWrapper = styled.div`
  margin-bottom: 20px;
`;

const ContentPlaceholderWrapper = styled(motion.div)`
  padding: 10px 10px 0 10px;
  transform-origin: top center;
`;
