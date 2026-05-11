import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "motion/react";
import GlobalStyle from "./globalStyles";

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
// import SoundBar from "./subComponents/SoundBar";  // ← COMMENT THIS OUT

function App() {
  const location = useLocation();

  // ── 1. FULLSCREEN: request on first user interaction ──────────────────────
  useEffect(() => {
    const requestFS = () => {
      const el = document.documentElement;
      if (el.requestFullscreen) {
        el.requestFullscreen().catch(() => {});
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
      }
    };

    // Try immediately (works in Electron / some scenarios)
    try {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } catch (_) {}

    // Fallback: trigger on very first user interaction
    document.addEventListener("click", requestFS, { once: true });
    document.addEventListener("keydown", requestFS, { once: true });

    return () => {
      document.removeEventListener("click", requestFS);
      document.removeEventListener("keydown", requestFS);
    };
  }, []);

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        {/* <SoundBar /> */}  {/* ← COMMENT THIS OUT */}

        {/* ── 2. SMOOTH PAGE TRANSITIONS: AnimatePresence mode="wait" ── */}
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/skills" element={<MySkillsPage />} />
            {/* Catch-all: send unknown routes to Main */}
            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;