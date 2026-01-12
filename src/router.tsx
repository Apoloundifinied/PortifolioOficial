import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import Assets from './pages/Assets.tsx';
import Learning from './pages/Learning.tsx';
import Contact from './pages/Contact.tsx';
import Navbar from './components/Navbar.tsx';
import Container from './components/Container.tsx';
import Skills from './pages/Skills.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Container>
          <Home />
        </Container>
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar />
        <Container>
          <About />
        </Container>
      </>
    ),
  },
  {
    path: '/projects',
    element: (
      <>
        <Navbar />
        <Container>
          <Projects />
        </Container>
      </>
    ),
  },

  {
    path: '/assets',
    element: (
      <>
        <Navbar />
        <Container>
          <Assets />
        </Container>
      </>
    ),
  },
   {
      path: '/skills',
    element: (
      <>
        <Navbar />
        <Container>
          <Skills />
        </Container>
      </>
    ),

   },

  {
    path: '/learning',
    element: (
      <>
        <Navbar />
        <Container>
          <Learning />
        </Container>
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Navbar />
        <Container>
          <Contact />
        </Container>
      </>
    ),
  },
]);

export default router;