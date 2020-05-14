import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { useWindowSize } from '../hooks/useWindowSize';
import { Flex, Container } from '../styles/blocks';
import { useGlobalStateContext } from '../context/globalContext';

import { Github, LinkedIn, Medium } from '../assets/svgs/socialMedia';
import { Notification } from './notification';

export const Banner = ({ notifications }) => {
  const { currentTheme } = useGlobalStateContext();
  let canvas = useRef(null);
  const size = useWindowSize();

  const Data = [
    { info: '' },
    { info: 'I am seeking for a frontend engineer position' },
    {
      info: 'I have multiple projects that I can share!',
    },
    {
      info: 'blah',
    },
  ];

  useEffect(() => {
    let renderingElement = canvas.current;
    let drawingElement = renderingElement.cloneNode();

    let drawingContext = drawingElement.getContext('2d');
    let renderingContext = renderingElement.getContext('2d');

    let lastX;
    let lastY;

    let moving = false;

    renderingContext.globalCompositeOperation = 'source-over';
    renderingContext.fillStyle =
      currentTheme === 'dark' ? '#000000' : '#ffffff';
    renderingContext.fillRect(0, 0, size.width, size.height);

    const _mousemove = (ev) => {
      if (moving) {
        drawingContext.globalCompositeOperation = 'source-over';
        renderingContext.globalCompositeOperation = 'destination-out';
        let currentX = ev.pageX - renderingElement.offsetLeft;
        let currentY = ev.pageY - renderingElement.offsetTop;
        drawingContext.lineJoin = 'round';
        drawingContext.moveTo(lastX, lastY);
        drawingContext.lineTo(currentX, currentY);
        drawingContext.closePath();
        drawingContext.lineWidth = 80;
        drawingContext.stroke();
        lastX = currentX;
        lastY = currentY;
        renderingContext.drawImage(drawingElement, 0, 0);
      }
    };

    const _mouseup = (ev) => {
      moving = false;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    };

    const _mouseover = (ev) => {
      moving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    };

    renderingElement.addEventListener('mouseover', (ev) => _mouseover(ev));
    renderingElement.addEventListener('mouseup', (ev) => _mouseup(ev));
    renderingElement.addEventListener('mousemove', (ev) => _mousemove(ev));

    return () => {
      // Will be garbage collected
      drawingElement = null;
      drawingElement = renderingElement.cloneNode();
      // Also removing listeners
      renderingElement.removeEventListener('mouseover', (ev) => _mouseover(ev));
      renderingElement.removeEventListener('mouseup', (ev) => _mouseup(ev));
      renderingElement.removeEventListener('mousemove', (ev) => _mousemove(ev));
    };
  }, [currentTheme]);

  return (
    <Wrapper>
      <Video>
        <video height='100%' width='100%' preload autoPlay loop muted>
          <source src={require('../assets/videos/homeBackground.mp4')} />
        </video>
      </Video>
      <Canvas width={size.width} height={size.height} ref={canvas} />
      <Container noHeight>
        <NotificationsWrapper>
          <AnimatePresence initial={false}>
            {notifications.map((id) => (
              <Notification key={id} id={id} />
            ))}
          </AnimatePresence>
        </NotificationsWrapper>

        <SocialMediaWrapper>
          <Flex>
            <Github width={32} height={32} />
            <LinkedIn width={32} height={32} />
            <Medium width={32} height={32} />
          </Flex>
        </SocialMediaWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.background};
  width: 100%;
  height: 100vh;
`;

const Video = styled.div`
  height: 100%;
  width: 100%;
  video {
    object-fit: cover;
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
`;

const SocialMediaWrapper = styled.div`
  position: absolute;
  display: flex;
  bottom: 50px;
  right: 30px;
  display: inline-block;
  background: ${({ theme }) => theme.background};
  padding: 10px;
  border-radius: 20px;
`;

const NotificationsWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: -20px;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: flex-end;
  padding: 20px auto;
  border-radius: 10px;
  /* background: ${({ theme }) => theme.background}; */
`;

const Path = (props) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='hsl(0, 0%, 18%)'
    strokeLinecap='round'
    {...props}
  />
);

// const CloseButton = ({ close }) => (
//   <button onClick={close} className="close">
//     <svg width="23" height="23" viewBox="0 0 23 23">
//       <Path d="M 3 16.5 L 17 2.5" />
//       <Path d="M 3 2.5 L 17 16.346" />
//     </svg>
//   </button>
// )
