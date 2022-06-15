// ========== App
// import all modules
import React from 'react';
import { Hero, Title, Container } from './styles';
import { Head } from './components';

const App: React.FC = () => (
  <Hero>
    <Head />
    <Container>
      <Title>Home</Title>
    </Container>
  </Hero>
);

export default App;
