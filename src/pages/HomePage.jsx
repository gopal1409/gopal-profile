import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import Services from '@components/sections/Services';
import Skills from '@components/sections/Skills';
import Experience from '@components/sections/Experience';
import Certifications from '@components/sections/Certifications';
import Clients from '@components/sections/Clients';
import Training from '@components/sections/Training';
import Projects from '@components/sections/Projects';
import Contact from '@components/sections/Contact';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Gopal Das | DevOps Consultant and Enterprise Architect</title>
        <meta
          name="description"
          content="Senior DevOps Consultant with 28+ years experience in CI/CD, Kubernetes, Cloud Architecture, and DevSecOps transformation."
        />
      </Helmet>
      <Box component="article">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Certifications />
        <Clients />
        <Training />
        <Projects />
        <Contact />
      </Box>
    </>
  );
};

export default HomePage;
