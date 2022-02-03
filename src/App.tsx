import React, { useState } from 'react';
import Header from './components/Header';

import NotesList from './components/NotesList';
import CreateNotes from './components/CreateNotes';
  
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';

function App() { 
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
             <NotesList/>
          </Col>
        </Row>
        <Row>
          <Col>
             <CreateNotes/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
