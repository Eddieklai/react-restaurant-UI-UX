import React from 'react';
import styled from 'styled-components';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

import "./index.css";
import "./App.css";
import Aboutus from "./components/Aboutus/Aboutus";

export default function App() {
  return (
    <Container className="App">
        <Navbar />
        <Header />
        <Aboutus />
    </Container>
  );
}

const Container = styled.div `
    
`;