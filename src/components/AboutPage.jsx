import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { motion } from 'motion/react'
import { DarkTheme } from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/ChatGPT_Image_May_10__2026__02_21_58_PM-removebg-preview.png'

/* ── Floating keyframe for astronaut ── */
const float = keyframes`
  0%   { transform: translateY(-10px); }
  50%  { transform: translateY(15px) translateX(15px); }
  100% { transform: translateY(-10px); }
`

/* ── Subtle glow pulse on the card border ── */
const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 18px rgba(255,255,255,0.08); }
  50%       { box-shadow: 0 0 36px rgba(255,255,255,0.22), 0 0 60px rgba(255,255,255,0.06); }
`

/* ────────────────────────────────────── STYLED COMPONENTS ── */

const Box = styled(motion.div)`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const Spaceman = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 0 24px rgba(255,255,255,0.15));
  }
`

const Main = styled(motion.div)`
  border: 1.5px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2.2rem 2.4rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.75;
  font-size: calc(0.68rem + 0.75vw);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  background-color: rgba(0, 0, 0, 0.55);
  border-radius: 20px;
  animation: ${glowPulse} 4s ease-in-out infinite;

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.08);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.text};
    border-radius: 10px;
  }
`

/* Inline highlight span */
const Highlight = styled(motion.span)`
  color: #a8edea;
  font-style: italic;
`

/* ────────────────────────────────────── ANIMATION VARIANTS ── */

/* Page fade */
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
  exit:    { opacity: 0, transition: { duration: 0.4,  ease: 'easeIn'  } },
}

/* Card: rises from below with spring */
const cardVariants = {
  initial: { y: 120, opacity: 0, scale: 0.97 },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 18,
      mass: 1,
      delay: 0.25,
      /* stagger children once card arrives */
      when: 'beforeChildren',
      staggerChildren: 0.18,
    },
  },
}

/* Each paragraph: also rises bottom-to-top */
const paraVariants = {
  initial: { y: 30, opacity: 0, filter: 'blur(4px)' },
  animate: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 80, damping: 20 },
  },
}

/* Astronaut: drops in from bottom-right */
const astronautVariants = {
  initial: { y: 120, x: 60, opacity: 0, rotate: -8 },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 55,
      damping: 14,
      delay: 0.5,
    },
  },
}

/* BigTitle: rises from bottom */
const titleVariants = {
  initial: { y: 60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 70, damping: 18, delay: 0.1 },
  },
}

/* ────────────────────────────────────── COMPONENT ── */

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <LogoComponent theme='dark' />
        <SocialIcons theme='dark' />
        <PowerButton />
        <ParticleComponent theme='dark' />

        {/* Astronaut — smooth bottom-to-top spring entry */}
        <Spaceman variants={astronautVariants} initial="initial" animate="animate">
          <img src={astronaut} alt="astronaut" />
        </Spaceman>

        {/* Card — rises from bottom, then staggers children */}
        <Main
          variants={cardVariants}
          initial="initial"
          animate="animate"
        >
          {/* Paragraph 1 */}
          <motion.div variants={paraVariants} style={{ color: '#FFFFFF', marginBottom: '1.2rem' }}>
            I'm <Highlight>V. Calwin Samuel</Highlight>, a third-year{' '}
            <Highlight>Computer Science & Engineering</Highlight> student at Sri Krishna
            College of Engineering and Technology. I don't just write code — I understand
            the structure, the logic, and the <em>why</em> behind every system I build,
            because I believe great software starts with clear thinking.
          </motion.div>

          {/* Paragraph 2 */}
          <motion.div variants={paraVariants} style={{ color: '#FFFFFF', marginBottom: '1.2rem' }}>
            I'm a <Highlight>creative problem-solver</Highlight> who loves collaborating
            with people, bouncing ideas, and turning concepts into real, working products.
            When I'm not coding, you'll find me exploring AI frameworks, attending
            engineering meetups, or experimenting with the latest tech just to see what's
            possible.
          </motion.div>

          {/* Paragraph 3 */}
          <motion.div variants={paraVariants} style={{ color: '#FFFFFF' }}>
            Lifelong learner. Product builder. Someone who genuinely enjoys solving hard
            problems — and even harder ones with great people.{' '}
            <Highlight>Looking to build something cool? Let's talk.</Highlight>
          </motion.div>
        </Main>

        {/* BigTitle — rises from bottom */}
        <motion.div
          variants={titleVariants}
          initial="initial"
          animate="animate"
          style={{ position: 'absolute', top: '10%', left: '5%' }}
        >
          <BigTitle text="ABOUT" top="0" left="0" />
        </motion.div>
      </Box>
    </ThemeProvider>
  )
}

export default AboutPage