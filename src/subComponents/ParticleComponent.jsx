import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => {
    // Light theme particles (for MySkillsPage and Main)
    if (props.theme === "light") {
      return {
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#000000",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.4,
            random: true,
            animation: {
              enable: false,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: 2,
            random: true,
            animation: {
              enable: false,
              speed: 20,
              minimumValue: 0.5,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#000000",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
            push: {
              quantity: 2,
            },
          },
        },
        background: {
          color: "transparent",
        },
        smooth: true,
        fpsLimit: 60,
      };
    }
    
    // Dark theme particles (for AboutPage)
    return {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#fcf6f4",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.6,
          random: true,
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.2,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: true,
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.5,
            sync: false,
          },
        },
        links: {
          enable: true,
          distance: 100,
          color: "#fcf6f4",
          opacity: 0.15,
          width: 0.8,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 120,
            links: {
              opacity: 0.3,
            },
          },
          push: {
            quantity: 2,
          },
        },
      },
      background: {
        color: "transparent",
      },
      smooth: true,
      fpsLimit: 60,
    };
  }, [props.theme]);

  if (!init) return <Box />;

  return (
    <Box>
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        options={options}
      />
    </Box>
  );
};

export default ParticlesComponent;