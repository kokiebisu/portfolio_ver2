import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Flex } from '../styles/blocks';
import profile from '../assets/images/profile.jpg';

export const Notification = ({ id }) => {
  return (
    <Wrapper
      className={`background${id}`}
      key={id}
      positionTransition
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}>
      <Flex width>
        <AvatarWrapper>
          <Avatar>
            <img height='100%' width='100%' src={profile} alt='' />
          </Avatar>
        </AvatarWrapper>
        <Line />
        <TextWrapper>
          <Flex>
            <Text>{data[id]}</Text>
          </Flex>
        </TextWrapper>
      </Flex>
    </Wrapper>
  );
};

const data = [
  null,
  'Hi there!',
  "I'm Kenichi Okiebisu",
  'I currently seek a fullstack position in Vancouver',
  'Here are my personal projects...',
];

const Wrapper = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  width: 500px;
  /* background: white; */
  margin: 10px;
  flex: 0 0 100px;
  border-radius: 10px;
  font-size: 12px;
  &.background1 {
    background-color: ${({ theme }) => theme.blue} !important;
  }

  &.background2 {
    background-color: ${({ theme }) => theme.green} !important;
  }

  &.background3 {
    background-color: ${({ theme }) => theme.yellow} !important;
  }

  &.background4 {
    background-color: ${({ theme }) => theme.purple} !important;
  }
`;

const AvatarWrapper = styled.div`
  margin-left: 20px;
`;

const Avatar = styled.div`
  border-radius: 99%;

  img {
    width: 46px;
    height: 46px;
    border-radius: 99%;
    border: 2px solid white;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 25px;
  margin: 0 20px;
  background-color: white;
`;

const TextWrapper = styled.div`
  padding-right: 20px;
  flex-grow: 1;
`;

const Text = styled.h1`
  color: white;
  font-family: SFProdisplay-Regular;
`;
