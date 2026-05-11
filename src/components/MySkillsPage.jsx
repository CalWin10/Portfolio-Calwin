import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'motion/react'
import {lightTheme} from './Themes';
import { Design, Develope } from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled(motion.div)`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid rgba(255, 255, 255, 0.8);
color: ${props => props.theme.text};
background-color: rgba(255, 255, 255, 0.15);
backdrop-filter: blur(12px);
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;
border-radius: 20px;
font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
transition: all 0.3s ease;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

&:hover{
    background-color: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 1);
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
color: ${props => props.theme.text};

${Main}:hover &{
    &>*{
        fill: ${props => props.theme.text};
    }
}

&>*:first-child{
    margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 0.8vw);
padding: 0.5rem 0;

${Main}:hover &{
    color: ${props => props.theme.text};
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
    display: block;
    color: ${props => props.theme.text};
}
ul, p{
    margin-left: 1.5rem;
    margin-top: 0.5rem;
}
`

// Smooth transition variants
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.4, ease: 'easeIn' } },
}

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <LogoComponent theme='light'/>
                <SocialIcons theme='light'/>
                <PowerButton />
                <ParticleComponent theme='light' />
                
                {/* Data Engineering Box */}
                <Main>
                    <Title>
                        <Design width={40} height={40} /> Data Engineering
                    </Title>
                    <Description>
                        Building robust data pipelines and scalable architectures from raw data to actionable insights.
                    </Description>
                    <Description>
                        <strong>I like to work with</strong>
                        <p>Python, SQL, Linux</p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>Hadoop, Spark, Airflow, AWS, GCP, Azure, MCP, RAG, Open Source Models</p>
                    </Description>
                </Main>
                
                {/* Full-Stack Developer Box */}
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Full-Stack
                    </Title>
                    <Description>
                        Building scalable products from zero to production with clean architecture and modern frameworks.
                    </Description>
                    <Description>
                        <strong>I like to code in</strong>
                        <p>React, Java, Python</p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>MongoDB, MySQL, PostgreSQL, AWS, Kafka, Docker</p>
                    </Description>
                </Main>

                <BigTitle text="SKILLS" top="80%" right="30%" />
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage