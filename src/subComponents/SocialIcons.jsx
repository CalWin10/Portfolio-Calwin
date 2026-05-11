import { motion } from "motion/react";
import React from "react";
import styled from "styled-components";
import { Github } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const IconWrapper = styled.a`
  color: ${props => props.$color === "dark" ? DarkTheme.text : DarkTheme.body};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: ${props => props.$color === "dark" ? "#E4405F" : "#E4405F"};
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.$color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props) => {
  const iconColor = props.theme === "dark" ? DarkTheme.text : DarkTheme.body;
  
  return (
    <Icons>
      <motion.div
        initial={{scale:0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <IconWrapper 
          $color={props.theme}
          target="_blank"
          href={"https://github.com/CalWin10"}
          rel="noreferrer"
        >
          <Github width={25} height={25} fill={iconColor} />
        </IconWrapper>
      </motion.div>
      
      <motion.div
        initial={{scale:0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <IconWrapper 
          $color={props.theme}
          target="_blank"
          href={"https://www.instagram.com/calwin._/"}
          rel="noreferrer"
          style={{ color: iconColor }}
        >
          <i className="fa-brands fa-instagram" style={{ fontSize: "24px" }}></i>
        </IconWrapper>
      </motion.div>
      
      <motion.div
        initial={{scale:0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <IconWrapper 
          $color={props.theme}
          target="_blank"
          href={"https://www.linkedin.com/in/calwinsamuel/"}
          rel="noreferrer"
          style={{ color: iconColor }}
        >
          <i className="fa-brands fa-linkedin-in" style={{ fontSize: "24px" }}></i>
        </IconWrapper>
      </motion.div>

      <Line
        $color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;