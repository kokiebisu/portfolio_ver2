import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ContentPlaceholder } from './contentPlaceholder';
import styled from 'styled-components';
import { Flex } from '../styles/blocks';
// Images
import nextbnb from '../assets/images/nextbnb.png';
import { Airbnb } from '../assets/svgs/projects';
import slack from '../assets/images/slack.png';
import { Slack } from '../assets/svgs/projects';
import voice from '../assets/images/voice.jpg';

const Accordion = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  const renderIcon = (name) => {
    switch (name) {
      case 'nextbnb':
        return (
          <Airbnb width={24} height={24} color={isOpen ? 'white' : '#303030'} />
        );
      case 'slack':
        return (
          <Slack width={24} height={24} color={isOpen ? 'white' : '#303030'} />
        );
      default:
        return;
    }
  };

  return (
    <>
      <Header
        initial={false}
        animate={{
          backgroundColor: isOpen ? '#FF0088' : 'transparent',
          color: isOpen ? 'white' : '#303030',
        }}
        onClick={() => setExpanded(isOpen ? false : i)}>
        <Flex>
          <IconWrapper>{renderIcon(data[i].name)}</IconWrapper>
          {data[i].name}
        </Flex>
      </Header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <Section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}>
            <a href={data[i].link}>
              <Logo imgSrc={data[i].screenshot} />
            </a>
            <Description>{data[i].description}</Description>
            <ContentPlaceholder data={data[i].stack} />
          </Section>
        )}
      </AnimatePresence>
    </>
  );
};

export const Accordions = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState(0);
  return (
    <motion.div
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 0.5,
          when: 'beforeChildren',
          staggerChildren: 0.3,
        },
      }}
      initial={{
        y: 500,
        opacity: 0,
        transition: {
          when: 'afterChildren',
        },
      }}>
      {accordionIds.map((i) => (
        <Accordion i={i} expanded={expanded} setExpanded={setExpanded} />
      ))}
    </motion.div>
  );
};

const data = [
  {
    name: 'nextbnb',
    description: 'Replicated Airbnb with optimized rending',
    stack: [
      'react',
      'nextjs',
      'tailwindcss',
      'prisma',
      'typescript',
      'graphql-yoga',
      'postgresql',
    ],
    screenshot: nextbnb,
    link: 'https://nextbnb.kokiebisu.now.sh',
  },
  {
    name: 'slack',
    description: 'Replicated Slack',
    stack: [
      'react',
      'styled-components',
      'styled-system',
      'sequelize',
      'apollo server',
      'framer motion',
      'postgresql',
    ],
    screenshot: slack,
    link: 'https://nextbnb.kokiebisu.now.sh',
  },
  {
    name: 'voice',
    description:
      'A mobile app which enables students and teachers to send instantaneous feedbacks during class',
    stack: ['react', 'react-native', 'socket.io', 'firebase', 'express'],
    screenshot: voice,
    link: 'https://nextbnb.kokiebisu.now.sh',
  },
];

const Header = styled(motion.header)`
  background: transparent;
  border-radius: 10px;
  color: ${({ theme }) => theme.color};
  cursor: pointer;
  height: 60px;
  margin: 10px 0;
  font-size: 1.8rem;
  font-family: 'SFProDisplay-Heavy';
  position: relative;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  border: 2px solid ${({ theme }) => theme.tag};
  background-image: ${({ imgSrc }) => `url(${imgSrc})`};
  background-size: cover;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  height: 160px;
  margin: 10px 0;
  font-size: 1.8rem;
  font-family: SFProDisplay-Heavy;
  position: relative;
`;

const Description = styled.div`
  padding: 0 20px;
  padding-top: 10px;
  color: white;
`;

const Section = styled(motion.section)`
  overflow: hidden;
`;

const IconWrapper = styled.div`
  position: relative;
  bottom: 2px;
  margin-right: 12px;
`;

const accordionIds = [0, 1, 2];
